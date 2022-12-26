import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SignContainer from "./containers/SignContainer"
import StocksContainer from './containers/StocksContainer'


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/stocks' element={<StocksContainer />} />
        <Route path='/' element={<SignContainer />} />
        <Route path='/sign/:sign' element={<SignContainer />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
