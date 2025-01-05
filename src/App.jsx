import { useSelector } from 'react-redux'
import './App.css'
import Advice from './components/Advice'

function App() {

  const adviceData = useSelector((store)=>store.adviceStore?.advice?.advice);
  const id = useSelector((store)=>store.adviceStore?.advice?.id);

  return (
    <>
      <div className='app'>
          <Advice advice={adviceData} id={id}></Advice>
      </div>
    </>
  )
}

export default App
