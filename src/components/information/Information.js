import React from 'react';

// Assets
import './Information.css';
import brokercheck from '../../images/brokercheck_finra.png'


export default function Information() {
  return (
    <div className='floatingInformation'>
      <div className='information'>
        <div className='information-image'>
          <a href='https://brokercheck.finra.org/' target='_blank' rel='noreferrer'>
            <img src={brokercheck} alt='broker check logo' />
          </a>
        </div>

        <div className='information-btns'>
          <a className='btnSecurities ' href='https://advgrp.co/FormCRS-SAI' target='_blank' rel='noreferrer'>
            Securities America Form CRS
          </a>
        </div>
      </div>
    </div>
  );
}