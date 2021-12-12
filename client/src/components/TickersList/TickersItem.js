import React from 'react';
import { useSelector } from 'react-redux';
import { tickersSelectors } from '../../redux/tickers';

import {ReactComponent as ArrowTop} from '../../img/uparrow.svg';
import {ReactComponent as ArrowBottom} from '../../img/arrowdown.svg';
import s from './TickersList.module.css';

export default function TickersItem() {

    const tickers = useSelector(tickersSelectors.getTickers);

  return (
    <>
      {tickers &&
        tickers.map(({ticker, exchange, price, change, change_percent, dividend, yield: income, last_trade_time}) => (            
        <div key={ticker} className={s.item}>
            <h2 className={s.title}> {ticker} </h2>
            <ul className={s.listStatistics}>
              <li className={s.itemStatistics}>{exchange}</li>
              <li className={s.itemStatistics}>{price}</li>
              <li className={s.itemStatistics}>{change}</li>
              <li className={s.itemStatistics}>{change_percent}%{' '}
                {change_percent > 0 ? <ArrowTop className={s.arrowTop}/>
                 : <ArrowBottom className={s.arrowBottom}/>}
              </li>
              <li className={s.itemStatistics}>{dividend}</li>
              <li className={s.itemStatistics}>{income}</li>
              <li className={s.itemStatistics}> {new Date(last_trade_time).toLocaleDateString()}</li>
            </ul>
          </div> ),
        )}
    </>
  );
}