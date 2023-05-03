import React from 'react';
import './App.css';
import Header from './features/Header/Header';
import Home from './features/Home/Home';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Home />
      </main>
      <aside>
        This is aside
      </aside>
    </div>
  );
}

export default App;
