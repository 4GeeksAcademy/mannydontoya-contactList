import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import ContactCard from "../component/contactCard.js"
import { Modal } from "../component/modal.js";


export const Contacts = () => {
    const [showModal, setShowModal] = useState(false); 
    const { store, actions } = useContext(Context);
    return (
        <div className="container">
            <div>
                <p className="text-right my-3">
                    <Link className="btn btn-success" to="/add">Add new contact</Link>
                </p>
                <div id="contacts" className="panel-collapse collapse show" aria-expanded="true">
                    <ul className="list-group pull-down" id="contact-list">
                        
                        {store.contacts.map(contact => <ContactCard contact = {contact}/>)}
                    </ul>
                </div>
            </div>
            <Modal show={showModal} onClose={() => setShowModal(false)} />
        </div>
    );
}