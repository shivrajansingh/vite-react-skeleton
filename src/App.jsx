import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Provider } from "react-redux";
import store from "./store";

function App() {
  const [count, setCount] = useState(0)

  return (
    <Provider store={store}>
      <div class="flex items-center justify-center">
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo mr-4" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <h1 className="text-3xl font-bold underline">Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </Provider>
  )
}

export default App