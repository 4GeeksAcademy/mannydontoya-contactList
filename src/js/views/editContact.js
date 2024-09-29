import React, { useState, useEffect, useContext } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

export const EditContact = () => {
    const { store, actions } = useContext(Context);
    const [contact, setContact] = useState({});
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const contactToEdit = store.contacts.find(c => c.id === parseInt(id));
        if (contactToEdit) setContact(contactToEdit);
    }, [id, store.contacts]);

    function handleSubmit(e){
        e.preventDefault();
        actions.editContact(contact);
        navigate("/");
    }

    return (
        <div className="container">
            <div>
                <h1 className="text-center mt-5">Edit contact</h1>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Full Name</label>
                        <input name="name" type="text" className="form-control" placeholder="Full Name" 
                               value={contact.name || ''} onChange={e => setContact({...contact, name: e.target.value})} required />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input name="email" type="email" className="form-control" placeholder="Enter email" 
                               value={contact.email || ''} onChange={e => setContact({...contact, email: e.target.value})} required />
                    </div>
                    <div className="form-group">
                        <label>Phone</label>
                        <input name="phone" type="tel" className="form-control" placeholder="Enter phone" 
                               value={contact.phone || ''} onChange={e => setContact({...contact, phone: e.target.value})} required />
                    </div>
                    <div className="form-group">
                        <label>Address</label>
                        <input name="address" type="text" className="form-control" placeholder="Enter address" 
                               value={contact.address || ''} onChange={e => setContact({...contact, address: e.target.value})} required />
                    </div>
                    <button type="submit" className="btn btn-primary form-control">Save Changes</button>
                    <Link className="mt-3 w-100 text-center d-block" to="/">or get back to contacts</Link>
                </form>
            </div>
        </div>
    );
}