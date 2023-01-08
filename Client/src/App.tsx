import { useState } from 'react'
import Header from './components/Header'
import Home from './routes/Home'

function App(): JSX.Element {

  return (
    <>
    <Header/>
    <Home/> {/*Change dynamically with react-router-dom*/}
    </>
  )
}

export default App
