import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

import "./Form.css";

export default function Form() {
    const form = useRef();

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_USER_ID')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };


    // const [formData, setFormData] = useState({
    //     first_name: "",
    //     last_name: "",
    //     email: "",
    //     message: ""

    // })

    // let handleAdd = (event) => {
    //     const text = event.target.value;
    //     setFormData(text);
    // };

    // let handleAdd = async e =>{
    //     await this.setState({
    //         text: e.target.value
    //     })
    // }

    let handleSubmit = e => {
        console.log("funcionando")
    }

    return (
        <form ref={form} onSubmit={sendEmail}>
            <input
                className="field"
                // onChange={handleAdd}
                // value={formData.first_name}
                type="text"
                id="fname"
                name="first_name"
                placeholder="Your name.."
            />

            <input
                className="field"
                // onChange={handleAdd}
                // value={formData.last_name}
                type="text"
                id="lname"
                name="last_name"
                placeholder="Your last name.."
            />

            <input
                className="field"
                // onChange={handleAdd}
                // value={formData.email}
                type="email"
                id="email"
                name="email"
                placeholder="Your email"
            />

            <textarea
                className="field"
                // onChange={handleAdd}
                // value={formData.message}
                id="subject"
                name="message"
                placeholder="Write something.."
            ></textarea>
            <input
                className="btnForm"
                // onClick={handleSubmit}
                type="submit"
                value="Submit"
            />
        </form>
    );
}

