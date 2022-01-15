import './Main.css'
import pipe from '../operators/pipe';
import shuffleIndexed from '../text-handlers/shuffle-indexed/shuffleIndexed';
import textToIndexed from '../text-handlers/text-to-indexed/textToIndexed';
import AnimateText from '../view/components/AnimateText'
import stepSortIndexed from '../generators/step-sort-indexed/stepSortIndexed';
import generatorPipe from '../operators/generatorPipe';
import { indexedToString } from '../utils/text';


function Main() {
  const generatorChain = pipe(
    textToIndexed(),
    shuffleIndexed('reverse'),
    generatorPipe(
      stepSortIndexed('bubble')
    )
  )('hello how are you?');

  return (
    <div className="wrapper">
      <div className='field'>
        <AnimateText frameDelay={100} onNextFrame={() => {
          const result = generatorChain.next();

          if (result.done) return;
          
          return indexedToString(result.value)

        }}/>

      </div>
    </div>
  )
}

export default Main
