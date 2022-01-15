import React, { useState } from "react";

import "../css/Form.css";

function Form() {

    const [formData, setFormData] = useState({
        firstname: "",
        lastname: "",
        email: "",
        messsage: ""

    })

    let handleAdd = (event) => {
        const text = event.target.value;
        setFormData(text);
    };

    // let handleAdd = async e =>{
    //     await this.setState({
    //         text: e.target.value
    //     })
    // }

    let handleSubmit = e => {
        console.log("funcionando")
    }

    return (
        <form action="/action_page.php">
            <input
                className="field"
                onChange={handleAdd}
                value={formData.firstname}
                type="text"
                id="fname"
                name="firstname"
                placeholder="Your name.."
            />

            <input
                className="field"
                onChange={handleAdd}
                value={formData.lastname}
                type="text"
                id="lname"
                name="lastname"
                placeholder="Your last name.."
            />

            <input
                className="field"
                onChange={handleAdd}
                value={formData.email}
                type="email"
                id="email"
                name="email"
                placeholder="Your email"
            />

            <textarea
                className="field"
                onChange={handleAdd}
                value={formData.messsage}
                id="subject"
                name="message"
                placeholder="Write something.."
            ></textarea>
            <input
            className="btnForm"
                onClick={handleSubmit}
                type="submit"
                value="Submit"
            />
        </form>
    );
}

export default Form;
