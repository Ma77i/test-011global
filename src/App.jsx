import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SignContainer from "./containers/SignContainer"
import StocksContainer from './containers/StocksContainer'


const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SignContainer />} />
        <Route path='/stocks' element={<StocksContainer />} />
        <Route path='/sign/:sign' element={<SignContainer />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
