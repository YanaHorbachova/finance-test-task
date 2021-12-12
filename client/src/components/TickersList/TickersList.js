import React from 'react';
import TickersItem from './TickersItem';

import s from './TickersList.module.css';

export default function TickersList() {


    return (
        <div className={s.list}>
            <TickersItem />
        </div>
    )

}