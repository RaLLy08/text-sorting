import './App.css'
import pipe from './operators/pipe';
import shuffleIndexed from './text-handlers/shuffle-indexed/shuffleIndexed';
import textToIndexed from './text-handlers/text-to-indexed/textToIndexed';
import AnimateText from './components/AnimateText'
import sortIndexed from 'text-handlers/sort-indexed/sortIndexed';

function App() {
  pipe(
    textToIndexed((_, i) => {
      return (i + 1) % 2;
    }),
    shuffleIndexed('reverse'),
    sortIndexed('bubble')
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
