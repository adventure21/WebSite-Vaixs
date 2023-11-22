import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Hosting from './pages/Hosting';
function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/hosting" element={<Hosting></Hosting>} />

      </Routes>
    </BrowserRouter>
  )
}

export default App