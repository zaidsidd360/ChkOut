import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Header from './components/Header'

function App(): JSX.Element {
  const [count, setCount] = useState(0)

  return (
    <Header/>
  )
}

export default App
