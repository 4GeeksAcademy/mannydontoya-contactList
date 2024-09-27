import React, { useState } from "react";

import { Link } from "react-router-dom";
import ContactCard from "../component/contactCard.js"
import { Modal } from "../component/modal.js";


export const Contacts = () => {
    const [showModal, setShowModal] = useState(false); 
    return (
        <div className="container">
            <div>
                <p className="text-right my-3">
                    <Link className="btn btn-success" to="/add">Add new contact</Link>
                </p>
                <div id="contacts" className="panel-collapse collapse show" aria-expanded="true">
                    <ul className="list-group pull-down" id="contact-list">
                        <ContactCard onDelete={() => setShowModal(true)} />
                    </ul>
                </div>
            </div>
            <Modal show={showModal} onClose={() => setShowModal(false)} />
        </div>
    );
}