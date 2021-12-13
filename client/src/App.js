import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { tickersOperations } from './redux/tickers';

import Container from './components/Сontainer';
import TickersList from './components/TickersList';
import FormOnChangeInterval from './components/FormOnChengeInterval';

import './App.css';

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(tickersOperations.fetchTickers());
  }, [dispatch]);


  return (
    <div className="App">
      <Container>
        <FormOnChangeInterval/>
        <TickersList/>
      </Container>
    </div>
  );
}

export default App;
