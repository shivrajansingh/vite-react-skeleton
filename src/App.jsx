import { useState } from 'react'
import './App.css'
import { Provider } from "react-redux";
import store from "./store";
import MainRoutes from './routes/MainRoutes';
function App() {
  const [count, setCount] = useState(0)

  return (
    <Provider store={store}>
     <MainRoutes/>
    </Provider>
  )
}

export default App
