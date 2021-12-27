import * as React from 'react';
import { CalendarToday, Schedule, Flight } from "@material-ui/icons"; //O ÍCONE DO FOGUETE NÃO ESTÁ FUNCIONANDO, POR ISSO TROQUEI PELO AVIÃO 'FLIGHT'
import './Card.css';

export function Cardd() {
  const progress = {
    width: '75%'
  };
  const progress2 = {
    margin:'20px'
  };
  return (
    <div className="card">
      <br />
      <div className="card-body">
        <p className="card-title">Nome do Squad</p>
        <p className="card-text1">
        <Flight className='icons'/> Sprint 4 
        </p>
        <div className='start' class="w3-light-grey w3-round-large" style={progress2}>
          <div className='progress' class="w3-container w3-indigo w3-round-large"style={progress} >ㅤ</div>
        </div>
        <p className="card-text2">
          <Schedule/> Acaba em 2 dias
        </p>
        <p className="card-text">
          <CalendarToday className='icons'/> Início: 01/07/2021
        </p>
        <p className="card-text">
          <CalendarToday className='icons'/> Fim: 14/07/2021
        </p>
    </div>
  </div>)
}


