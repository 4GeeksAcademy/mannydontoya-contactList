
import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";


export const AddContacts = () => {
    const { store, actions } = useContext(Context);
    function handleSubmit(e){
        e.preventDefault()
        const contact = {
            name: e.target.name.value,
            phone: e.target.phone.value,
            email: e.target.email.value,
            address: e.target.address.value
        }
        actions.addContact(contact)
    }
    return (
        <div className="container">
            <div>
                <h1 className="text-center mt-5">Add a new contact</h1>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Full Name</label>
                        <input name = "name" type="text" className="form-control" placeholder="Full Name" />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input name = "email" type="email" className="form-control" placeholder="Enter email" />
                    </div>
                    <div className="form-group">
                        <label>Phone</label>
                        <input name = "phone" type="phone" className="form-control" placeholder="Enter phone" />
                    </div>
                    <div className="form-group">
                        <label>Address</label>
                        <input name = "address" type="text" className="form-control" placeholder="Enter address" />
                    </div>
                    <button type="submit" className="btn btn-primary form-control">Add Contact</button>
                    <Link className="mt-3 w-100 text-center" to="/">or get back to contacts</Link>
                </form>
            </div>
        </div>
    );

}