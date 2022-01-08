import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

import "../css/Form.css";

function Form() {

    const [formData, setFormData] = useState({
        firstname: "",
        lastname: "",
        email: "",
        messsage: ""

    })

    let handleAdd = (event) =>{
        const text = event.target.value;
        setFormData(text);
    };

    // let handleAdd = async e =>{
    //     await this.setState({
    //         text: e.target.value
    //     })
    // }

    let handleSubmit = e =>{
        console.log("funcionando")
    }
    return (
        <Container className='mt-5 mb-5'>
            <Row>
                <Col>
                    <div className="contactForm">
                        <p className="contactTitles">Contact Me</p>
                    <div>
                        <form action="/action_page.php">
                        <label>First Name</label>
                        <input
                            onChange={handleAdd}
                            value={formData.firstname}
                            type="text" 
                            id="fname" 
                            name="firstname" 
                            placeholder="Your name.." 
                        />
                        <label>Last Name</label>
                        <input
                            onChange={handleAdd}
                            value={formData.lastname}
                            type="text" 
                            id="lname" 
                            name="lastname" 
                            placeholder="Your last name.." 
                        />


                        <label>Email</label>
                        <input
                            onChange={handleAdd}
                            value={formData.email}
                            type="email" 
                            id="email" 
                            name="email" 
                            placeholder="Your email" 
                        />


                        <label>Message</label>
                        <textarea
                            onChange={handleAdd}
                            value={formData.messsage}
                            id="subject" 
                            name="message" 
                            placeholder="Write something.."
                        ></textarea>
                        <input
                            onClick={handleSubmit}
                            type="submit" 
                            value="Submit" 
                        />
                        </form>
                    </div>
                    </div>
                </Col>
            </Row>
        </Container>
    
    );
}

export default Form;
