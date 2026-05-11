import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from './pages/Dashboard'
import Transaction from './pages/Transaction'
import Splitter from './pages/Splitter'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/transaction" element={<Transaction />} />
        <Route path="/splitter" element={<Splitter />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App