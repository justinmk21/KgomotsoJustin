import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Footer from './ui/footer'
import Detail from './pages/Detail'
import ScrollToTop from './ScrollToTop'

function App() {
  

  return (
    <>
    <ScrollToTop />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/detail/:id' element={<Detail />} />
    </Routes>
     <Footer />
    </>
  )
}

export default App
