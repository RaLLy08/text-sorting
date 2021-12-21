import pipe from './text-handlers/pipe/pipe';
import shuffleIndexed from './text-handlers/operators/shuffle-indexed/shuffleIndexed';
import textToIndexed from './text-handlers/operators/text-to-indexed/textToIndexed';
import './App.css'
import AnimateText from './components/AnimateText'

function App() {
  pipe(
    textToIndexed(),
    shuffleIndexed(),
  )("Hello world");


  return (
    <div className="wrapper">
      <div className='field'>
        <AnimateText frames={[]}/>

      </div>
    </div>
  )
}

export default App
