import './App.css';
import Containt from './components/Containt';
import Footer from './components/Footer';
import Header from './components/Header';
import VR from './components/VR';

function App() {
  return (
    <div className="App">
      <Header />
      <VR />
      <Containt />
      <Footer />
    </div>
  );
}

export default App;
