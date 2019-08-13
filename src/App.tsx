import React from 'react';
import './App.css';
import { Card } from './components/card';
import { cardNumber } from './utils/utils';



const App: React.FC = () => {
  cardNumber.forEach(element => {
    console.log(element)
  });
  
  return (
    <div className="App">
      <header className="App-header">
        {cardNumber.map((element) => {
          return <Card key={element}></Card>
        })}
      </header>
    </div>
  );
}

export default App;
