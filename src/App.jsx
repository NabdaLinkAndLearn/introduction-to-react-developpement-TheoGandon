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
      <div className='logoPlace'>
        <Logo props={{ src: viteLogo, href: "https://vite.dev", alt: "Vite logo" }} />
        <Logo props={{ src: reactLogo, href: "https://react.dev", alt: "React Logo" }} />
      </div>
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
