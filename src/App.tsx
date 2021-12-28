import './App.css'
import pipe from './operators/pipe';
import shuffleIndexed from './text-handlers/shuffle-indexed/shuffleIndexed';
import textToIndexed from './text-handlers/text-to-indexed/textToIndexed';
import AnimateText from './components/AnimateText'
import stepSortIndexed from './text-handlers/step-sort-indexed/stepSortIndexed';

function App() {
  console.log(pipe(
    textToIndexed(),
    shuffleIndexed('reverse'),
    stepSortIndexed('bubble')
    // pipe(
    //   bubbleStepSort()
    //   stepSortToIndexed(fn)
    // )
    // sortIndexed('bubble')
  )('abc'));
  


  return (
    <div className="wrapper">
      <div className='field'>
        <AnimateText frames={[]}/>

      </div>
    </div>
  )
}

export default App
