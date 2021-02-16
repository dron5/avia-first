import React, {Fragment} from 'react';
import './App.css';
import fly from'./Fly.svg';

function App() {
  return (
    <Fragment>
      <header className="header"
        <img src={fly} className="header__logo" alt="logo"/>
      </header>
      <main className="App">
        Avia
      </main>
    </Fragment>
  );
}

export default App;
