import { useState } from 'react';
import './App.css';
import Cards from './components/Cards';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  const [dark, setDark] = useState(false);
  console.log(dark);
  return (
    <div className={dark ? `dark` : ''}>
      <Header dark={dark} setDark={setDark} />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
