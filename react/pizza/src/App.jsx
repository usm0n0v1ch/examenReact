import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

import Header from './components/Header';
import PizzaList from './pages/PizzaList';
import Footer from './components/Footer';
function App() {
  return (
    <div>
      <Header />
      <PizzaList />
      <Footer/>
    </div>
  );
}

export default App;
