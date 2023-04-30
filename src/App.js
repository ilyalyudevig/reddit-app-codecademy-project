import React from 'react';
import './App.css';
import Header from './features/Header/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        This is main
      </main>
      <aside>
        This is aside
      </aside>
    </div>
  );
}

export default App;
