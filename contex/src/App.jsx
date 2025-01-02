import './App.css'
import Context from './context/Context';
import CaseOne from './pages/CaseOne';
import CaseTwo from './pages/CaseTwo';

function App() {


  return (
    <Context>
      <h1>case page 1</h1>
      <CaseOne />
      <h1>case page 2</h1>
      <CaseTwo />
    </Context>
  )
}

export default App
