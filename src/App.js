import { useEffect } from 'react';
import './App.css';
import About from './components/About/About';
import Contacts from './components/Contacts/Contacts';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Projects from './components/Projects/Projects';
import { BrowserRouter } from 'react-router-dom';

function App() {
  useEffect(() => {
    const onScrollHeader = () => { 
      var header = document.querySelector('.header-container') 
      let prevScroll = window.scrollY 
      let currentScroll 
      window.addEventListener('scroll', () => { 
        currentScroll = window.scrollY 
        const headerHidden = () => header.classList.contains('header_hidden')        
        if (currentScroll > prevScroll && !headerHidden()) { 
          header.classList.add('header_hidden') 
        }
        if (currentScroll < prevScroll && headerHidden()) { 
          header.classList.remove('header_hidden') 
        }          
        prevScroll = currentScroll 
        header = document.querySelector('.header-container') 
      })          
    }          
    onScrollHeader()
  })
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Home />
        <About />
        <Projects />
        <Contacts />
      </div>
    </BrowserRouter>
  );
}

export default App;
