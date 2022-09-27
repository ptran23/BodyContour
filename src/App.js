import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import ScrollToTop from './components/scrollToTop';
import Home from './pages/Home'
import Services from './pages/Services';
import Results from './pages/Gallery';
import BookNow from './pages/BookNow'
import Navbar from './components/Navbar'
import Footer from './components/Footer'


function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop/>
        <Navbar/>
        <Routes>
          <Route path ="/" element={<Home />} />
          <Route path ="/services" element={<Services />} />
          <Route path='/booking' element={ <BookNow />} />
          <Route path ="/results" element={<Results />} />
        </Routes>
        <Footer className= "footer" />
      </Router>
    </div>
  );
}

export default App;
