import { useEffect, useState } from 'react';
import { useRef } from 'react';

type PropsTypes = {
    frameDelay?: number,
    frames: Array<string>,
};

const AnimateText = (props: PropsTypes) => {
    const { frames, frameDelay = 100 } = props;

    const [frame, setFrame] = useState<string>(frames[0]);
    const timeoutRef = useRef<ReturnType<typeof setTimeout>>();
    const countRef = useRef<number>(1);

    useEffect(() => {
        countRef.current = 0;

        const update = () => {
            
            setFrame(frames[countRef.current]);
            
            if (countRef.current < frames.length - 1) {
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

    return <>{frame}</>
}

export default AnimateText;