import { useEffect, useState } from 'react';
import { useRef } from 'react';

type PropsTypes = {
    frameDelay?: number,
    frames?: Array<string>,
    onNextFrame?: (count: number) => any
};

const AnimateText = (props: PropsTypes) => {
    const { frames, frameDelay = 100, onNextFrame } = props;

    const [frame, setFrame] = useState<string>(frames ? frames[0]: "");
    const timeoutRef = useRef<ReturnType<typeof setTimeout>>();
    const countRef = useRef<number>(1);


    useEffect(() => {
        countRef.current = 0;

        const update = () => {
            const onNextFrameResult = onNextFrame && onNextFrame(countRef.current)
            const isFrame = typeof onNextFrameResult === 'string';

            if (isFrame) {
                setFrame(onNextFrameResult);
            } else if (frames) {
                setFrame(frames[countRef.current]);
            }
            
            if ((frames && countRef.current < frames.length - 1) || onNextFrameResult) {
                timeoutRef.current = setTimeout(() => {
                    update();
                }, frameDelay);

                countRef.current += 1;
            } else {
                countRef.current = 0;
            };
        }

        update();
        
        return () => clearTimeout(timeoutRef.current);
    }, [frames])
    // console.log(countRef.current, 'frame');
    
    return <>{frame}</>
}

export default AnimateText;