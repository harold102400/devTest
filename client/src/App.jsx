import './App.css'
import RenderData from './components/RenderData'
import RenderData2 from './components/RenderData2'
import RenderDataDB from './components/RenderDataDB'

function App() {


  return (
    <>
    <div className='container'>
      <div className="component">
      <RenderData/>
      </div>
      <div className="component">
      <RenderData2/>
      </div>
    </div>
    <div className='new-component'>
    <RenderDataDB />
    </div>
    </>
  )
}

export default App
