import './App.css'
import pipe from './operators/pipe';
import shuffleIndexed from './text-handlers/shuffle-indexed/shuffleIndexed';
import textToIndexed from './text-handlers/text-to-indexed/textToIndexed';
import AnimateText from './components/AnimateText'

function App() {
  pipe(
    textToIndexed((_, i) => {
      return (i + 1) % 2;
  }),
  )("abcd");


  return (
    <div className="wrapper">
      <div className='field'>
        <AnimateText frames={[]}/>

      </div>
    </div>
  )
}

export default App
