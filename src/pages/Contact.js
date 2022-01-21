import React from "react";

// Components
import Form from '../components/contact/Form'
import CardMap from '../components/contact/CardMap'

// Images
import backgroundImg from '../images/officeAddressImg.PNG'


//styles
import "../components/contact/Contact.css"
import Information from "../components/contact/Information";


export default function Contact() {
  // History function
  return (
    <div className="contact">
      <div className="cover">
        <img src={backgroundImg} alt='backgroundImg' className='w-100 h-60' />
      </div>

      <div className="rowMap">
        <CardMap />
      </div>

      <Information />

      <div className="contactBox">
        <div className="contactForm mx-auto">
          <div className="imgForm"></div>
          <div className="formRight">
            <h3 className="contactTitles">Contact Me</h3>
            <Form />
          </div>
        </div>
      </div>


    </div>
  );
}

