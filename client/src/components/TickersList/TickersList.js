import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 } from 'uuid';
import { getTickers } from '../../redux/tickers/tickers-selectors';
import { fetchTickers } from '../../redux/tickers/tickers-operations';
import TickersItem from './TickersItem';

import s from './TickersList.module.css';

const TickersList = () => {
    const dispatch = useDispatch();
  
    useEffect(() => {
      dispatch(fetchTickers());
    }, [dispatch]);
  
    const { prevTickers, currentTickers } = useSelector(getTickers);
    const prevPrices = prevTickers.map(ticker => ticker.price);

 

    return (
        <div className={s.list}>
            <div className={s.TitleItem}>
                <h2 className={s.title}> Ticker</h2>
                <ul className={s.TitleListItem}>
                    <li className={s.TitleItem}>Price</li>
                    <li className={s.TitleItem}>Change</li>
                    <li className={s.TitleItem}>Change %</li>
                    <li className={s.TitleItem}>Dividend</li>
                </ul>
            </div>
            {currentTickers.map((ticker, index) => (
                <TickersItem
                key={v4()}
                {...ticker}
                oldPrice={prevPrices[index]}
                />
            ))}
        </div>
        
    )

}

export default TickersList;