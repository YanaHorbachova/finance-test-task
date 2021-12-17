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

    console.log(useSelector(getTickers))
    console.log( dispatch(fetchTickers()))
  
    const { prevTickers, currentTickers } = useSelector(getTickers);
    const prevPrices = prevTickers.map(ticker => ticker.price);

 

    return (
        <div className={s.list}>
            <h1 className="TickerTitle">Tickers Live</h1>
            <div className="TickerListWrapper">
                <ul className="TickerHeadingList">
                <li className="TickerHeadingListItem">Ticker</li>
                <li className="TickerHeadingListItem">Price</li>
                <li className="TickerHeadingListItem">Change</li>
                <li className="TickerHeadingListItem">Change %</li>
                <li className="TickerHeadingListItem">Dividend</li>
                <li className="TickerHeadingListItem">Yield</li>
                </ul>
                <ul className="TickersList">
                {currentTickers.map((ticker, index) => (
                    <TickersItem
                    key={v4()}
                    {...ticker}
                    oldPrice={prevPrices[index]}
                    />
                ))}
                </ul>
            </div>
        </div>
    )

}

export default TickersList;