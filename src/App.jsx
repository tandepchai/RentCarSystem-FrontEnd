import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import ResidentialManagementInterface from './pages/ResidentialManagementInterface'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ResidentialManagementInterface/>
    </>
  )
}

export default App
