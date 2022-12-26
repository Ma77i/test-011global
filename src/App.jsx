import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SignContainer from "./containers/SignContainer"


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/sign/:signs' element={<SignContainer />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
