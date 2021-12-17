import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { fetchTickers} from './redux/tickers/tickers-operations';

import Container from './components/Сontainer';
import TickersList from './components/TickersList';
import FormOnChangeInterval from './components/FormOnChengeInterval';

import './App.css';

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTickers());
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
