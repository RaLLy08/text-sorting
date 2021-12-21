import pipe from './operators/pipe';
import shuffleIndexed from './text-handlers/shuffle-indexed/shuffleIndexed';
import textToIndexed from './text-handlers/text-to-indexed/textToIndexed';
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
