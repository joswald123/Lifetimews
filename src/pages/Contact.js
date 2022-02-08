import React from "react";

// Components
import Form from '../components/contact/Form'
import CardMap from '../components/contact/CardMap'

// Images
import backgroundImg from '../images/officeAddressImg.PNG'


export default function Contact() {
  // History function
  return (
    <div className="contact">
      <div className="cover">
        <img src={backgroundImg} alt='backgroundImg' className='w-100' />
      </div>

      <div className="rowMap">
        <CardMap />
      </div>

      
            <Form />
          


    </div>
  );
}

