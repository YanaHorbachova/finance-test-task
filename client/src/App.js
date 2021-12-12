import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { tickersOperations } from './redux/tickers';

import Container from './components/Сontainer';
import TickersList from './components/TickersList'

import './App.css';

function App() {

  const despatch = useDispatch();

  useEffect(() => {
    despatch(tickersOperations.fetchTickers());
  }, [despatch]);


  return (
    <div className="App">
      <Container>
        <TickersList/>
      </Container>
    </div>
  );
}

export default App;
