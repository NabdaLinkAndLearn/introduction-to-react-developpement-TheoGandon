import { useState } from 'react'
import './App.css'
import Logo from './components/logo'
import viteLogo from '/vite.svg'
import reactLogo from './assets/react.svg'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='logo'>
      <Logo 
        viteLogo={viteLogo} 
        reactLogo={reactLogo}
        viteHref="https://vite.dev"
        reactHref="https://react.dev"
        viteAlt="Vite logo"
        reactAlt="React logo"
      />
      <h1 className='logo'>Vite + React</h1>
      <div className="card">
        <button className='logo' onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p className='logo'>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs logo">
        Click on the Vite and React logos to learn more
      </p>
      </div>
    </>
  )
}

export default App
