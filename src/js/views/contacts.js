// Contacts.js
import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import ContactCard from "../component/contactCard.js"
import { Modal } from "../component/modal.js";

export const Contacts = () => {
    const [showModal, setShowModal] = useState(false);
    const [deleteId, setDeleteId] = useState(null);
    const { store, actions } = useContext(Context);

    const handleDelete = (id) => {
        setDeleteId(id);
        setShowModal(true);
    };

    const confirmDelete = () => {
        actions.deleteContact(deleteId);
        setShowModal(false);
    };

    return (
        <div className="container mt-4">
            <h1 className="text-center mb-4">Contact List</h1>
            <div className="d-flex justify-content-end mb-3">
                <Link className="btn btn-success" to="/add">Add new contact</Link>
            </div>
            <div className="card">
                <ul className="list-group list-group-flush">
                    {store.contacts.map(contact => <ContactCard key={contact.id} contact={contact} onDelete={handleDelete} />)}
                </ul>
            </div>
            <Modal show={showModal} onClose={() => setShowModal(false)}>
                <div className="modal-header">
                    <h5 className="modal-title">Delete Contact</h5>
                    <button type="button" className="close" onClick={() => setShowModal(false)}>
                        <span>&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    <p>Are you sure you want to delete this contact?</p>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" onClick={() => setShowModal(false)}>Cancel</button>
                    <button type="button" className="btn btn-danger" onClick={confirmDelete}>Delete</button>
                </div>
            </Modal>
        </div>
    );
}