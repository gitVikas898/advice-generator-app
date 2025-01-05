import { useSelector } from 'react-redux'
import './App.css'
import Advice from './components/Advice'

function App() {

  const advice = useSelector((store)=>store.advices.advice.advice);
  const id =  useSelector(store=>store.advice?.slip.id);

  return (
    <>
      <div className='app'>
          <Advice advice={advice} id={id}></Advice>
      </div>
    </>
  )
}

export default App
