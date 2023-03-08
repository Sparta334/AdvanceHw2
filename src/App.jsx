import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './pages/bootstrap.min.css'
import './pages/Home.css'
import Home from './pages/Home'

function App() {
  const [count, setCount] = useState(0)

  return (

    <Home/>

  );
}

export default App
