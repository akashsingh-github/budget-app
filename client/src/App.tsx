import React from 'react';
import './App.css';
import "./index.css";
import Login from './Components/Auth/Login';
import NewExpense from './Components/NewExpense/NewExpense';
import Borrow from './Components/Borrow/Borrow';
import Lend from './Components/Lend/Lend';

function App() {
  return (
    <div className="App">
      <Login/>
      {/* <NewExpense/> */}
      {/* <Borrow/> */}
      {/* <Lend/> */}
    </div>
  );
}

export default App;
