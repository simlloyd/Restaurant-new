import './App.css';
import Navbar from './Navbar/Navbar';
import Hero from './Hero/Hero';
import Menu from './Components/Menu/Menu';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';


function App() {
  return (
    <div className="App">
      <>
        <Navbar />
        <Hero />
        <Menu />
        <About />
        <Contact />
        <Footer />
      </>
    </div>
  );
}

export default App;
