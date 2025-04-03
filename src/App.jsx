import './App.css'
import { Route , Routes } from 'react-router-dom'
import Landing from './pages/Landing'
import Documentation from './pages/Documentation'
import Download from './pages/Download'
import Header from './components/Header'
import Footer from './components/Footer'
function App() {
  return (
    <>
      <Header />
      <Routes>
          <Route path={'/'} element={<Landing slug={'Home'} /> }   />
	        <Route path={'/docs'} element={<Documentation slug={'Documentation'}/>} />
	  	    <Route path={'/download'} element={<Download slug={'Download Signal'} />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
