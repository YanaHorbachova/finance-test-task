import React, { useState } from 'react';
import socket from '../../helpers/socket';
import s from './FormOnChangeInterval.module.css';

export default function FormOnChangeInterval() {
  const [currentInterval, setCurrentInterval] = useState(5);
  const handleChangeInterval = e => setCurrentInterval(e.currentTarget.value);

  const handleSubmit = e => {
    e.preventDefault();
    socket.emit('changeInterval', currentInterval * 1000);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className={s.form}>
        <h2 className={s.title}>Interval update</h2>
        <div className={s.inputContainer}>
          <input
            className={s.input}
            type="number"
            name="interval"
            onChange={handleChangeInterval}
            value={currentInterval}
            autoComplete="off"
            min="1"
            max="10"
          />
          <span>seс</span>
        </div>
        <button type="submit" className={s.button}>
            update 
        </button>
      </form>
    </div>
  );
}