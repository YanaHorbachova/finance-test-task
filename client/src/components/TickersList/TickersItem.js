import React from 'react';

import {ReactComponent as ArrowTop} from '../../img/uparrow.svg';
import {ReactComponent as ArrowBottom} from '../../img/arrowdown.svg';
import s from './TickersList.module.css';

const TickersItem = ({
  ticker,
  exchange,
  price,
  change,
  change_percent,
  dividend,
  income,
  yield: yeildValue,
  oldPrice
}) => { return (                  
        <div className={s.item}>
            <h2 className={s.title}> {ticker} </h2>
            <ul className={s.listStatistics}>
              <li className={s.itemStatistics}>{exchange}</li>
              <li className={s.itemStatistics}>{price}</li>
              <li className={s.itemStatistics}>{change}</li>
              <li className={s.itemStatistics}>{change_percent}%{' '}
                {price > oldPrice ? <ArrowTop className={s.arrowTop}/>
                 : <ArrowBottom className={s.arrowBottom}/>}
              </li>
              <li className={s.itemStatistics}>{dividend}</li>
              <li className={s.itemStatistics}>{income}</li>
            </ul>
          </div> 
          )
}



export default TickersItem;