import React, { useRef } from 'react';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import emailjs from '@emailjs/browser';

import "./Form.css";

export default function Form() {
    // SweetAlert2 
    const MySwal = withReactContent(Swal)


    // sendEmail 
    const form = useRef();

    function sendEmail(e) {
        e.preventDefault();

        // emailjs.sendForm('service_d28nmvz', 'template_i4gxbkl', form.current, 'user_JIk8SfrGAqA2uYzmqAeXh')
        emailjs.sendForm('service_c1au3dn', 'template_boxhcv7', form.current, 'user_cfPKeygtI64xSzQa8OooC')
            .then((result) => {
                console.log(result.text);
                // clean form data
                e.target.reset();

                // Alert
                MySwal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Send email!',
                    showConfirmButton: false,
                    timer: 3500
                })


            }, (error) => {
                console.log(error.text);
            });
    };


    return (
        <div className="contactBox">
            <div className="contactForm mx-auto">
                <div className="imgForm"></div>
                <div className="formRight">
                    <h4 className="contactTitles">Contact Us</h4>
                    <div className="info">
                        <p>Send Us a Message.</p>
                        <p>Please complete the Contact Form and we'll be in touch.</p>
                        <p>The data on this form is submitted and transmitted via a secure connection.</p>
                    </div>

                    <form ref={form} onSubmit={sendEmail}>
                        <input
                            className="field"
                            type="text"
                            id="fname"
                            name="first_name"
                            placeholder="Name..."
                            required
                        />

                        <input
                            className="field"
                            type="text"
                            id="lname"
                            name="last_name"
                            placeholder="Last Name..."
                            required
                        />

                        <input
                            className="field"
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Your Email..."
                            required
                        />

                        <textarea
                            className="field"
                            id="subject"
                            name="message"
                            placeholder="Write Your Message..."
                            required
                            ></textarea>
                        <input
                            className="btn btnForm"
                            type="submit"
                            value="Submit"
                        />
                    </form>
                </div>
            </div>
        </div>
    );
}

