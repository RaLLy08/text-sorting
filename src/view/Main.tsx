import './Main.css'
import pipe from '../operators/pipe';
import shuffleIndexed from '../text-handlers/shuffle-indexed/shuffleIndexed';
import textToIndexed from '../text-handlers/text-to-indexed/textToIndexed';
import AnimateText from '../view/components/AnimateText'
import stepSortIndexed from '../generators/step-sort-indexed/stepSortIndexed';
import generatorPipe from '../operators/generatorPipe';
import { indexedToString, splitByLength } from '../utils/text';

const SYMBOLS_IN_ROW = 40;
const FRAME_DELAY = 40;

function Main() {
  const generatorChain = pipe(
    textToIndexed(),
    shuffleIndexed('reverse'),
    generatorPipe(
      stepSortIndexed('bubble')
    )
  )('Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur, quo mollitia. Blanditiis porro reprehenderit eius? Nam, minus amet, fuga veritatis beatae a voluptas fugit error repellendus inventore modi ea enim.'); 

  return (
    <div className="wrapper">
      <div className='wrapper__content'>
        <div className='content__field'>
          <AnimateText frameDelay={FRAME_DELAY} onNextFrame={() => {
            const result = generatorChain.next();

            if (result.done) return;
          
            const splitted = splitByLength(indexedToString(result.value), SYMBOLS_IN_ROW)
              
            return splitted.map(el => {

              return <div style={{display: 'block'}}>{el}</div>
            });
          }}/>

        </div>
      </div>
    </div>
  )
}

export default Main
