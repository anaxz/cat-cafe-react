import React from "react";

import './ContactUs.css'

const ContactUs = () => {
    return <div className="Contact-us-container">
        <div id='about-us'>
            <h3>About us</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates exercitationem quis, mollitia magni libero earum explicabo distinctio itaque suscipit amet modi voluptatibus ad tempora assumenda, recusandae architecto iste at doloribus?
            Fugit rem voluptate eos vero! Et ipsam eveniet repellendus molestias alias, sapiente consequuntur enim commodi reiciendis aut odit ipsum dignissimos harum nobis, rem nemo corrupti ad maxime! Quis, dolorum eaque?
            Nemo ratione incidunt a quod voluptatum reprehenderit qui iusto sed? Consequatur nihil, culpa beatae vero sequi rerum voluptatum. Mollitia iste quisquam saepe veritatis magnam debitis consectetur libero exercitationem, consequuntur modi.
            Fugiat enim temporibus ea itaque repellat tenetur, non iste suscipit deserunt, corrupti rerum, necessitatibus ipsa minima illo. Recusandae rem corporis, in consequuntur, necessitatibus eligendi vero porro, quos exercitationem neque magnam?</p>
        </div>

        <form>
            <div>
                <h3>Contact Us form</h3>
                <label htmlFor="subject">Subject: </label>
                <input type='text' name="subject" placeholder="subject" required />
                <label htmlFor="email">Email: </label>
                <input type='email' name="email" placeholder="email" required />
            </div>
            <textarea id="textfield" type='text' name="textfield" placeholder="Enter message here..." required />
            <button type="submit" disabled >Submit</button>
        </form>
    </div>
}

export default ContactUs