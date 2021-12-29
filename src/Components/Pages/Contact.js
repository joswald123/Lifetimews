import React from 'react'
import { useNavigate } from 'react-router-dom'

function Contact() {
    // History function
    let navigate = useNavigate();
    return (
        <div>
            CONTACT PAGE 
            <button
                onClick={() => {
                    navigate("./Home.js")
                }}
            >
                
                Change to Home Page 

            </button>
        </div>
    )
}

export default Contact;
