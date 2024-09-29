// ContactCard.js
import React from "react";
import { Link } from "react-router-dom";

const ContactCard = ({ contact, onDelete }) => {
    return (
        <li className="list-group-item">
            <div className="row align-items-center">
                <div className="col-md-2 mb-3 mb-md-0">
                    <img src={`https://picsum.photos/id/${contact.id}/200`} alt={contact.name} className="rounded-circle img-fluid" />
                </div>
                <div className="col-md-8 mb-3 mb-md-0">
                    <h5 className="mb-1">{contact.name}</h5>
                    <p className="mb-1"><i className="fas fa-map-marker-alt mr-2"></i>{contact.address}</p>
                    <p className="mb-1"><i className="fas fa-phone mr-2"></i>{contact.phone}</p>
                    <p className="mb-0"><i className="fas fa-envelope mr-2"></i>{contact.email}</p>
                </div>
                <div className="col-md-2 text-md-right">
                    <Link to={`/edit/${contact.id}`} className="btn btn-warning btn-sm mr-2">
                        <i className="fas fa-pencil-alt"></i>
                    </Link>
                    <button className="btn btn-danger btn-sm" onClick={() => onDelete(contact.id)}>
                        <i className="fas fa-trash-alt"></i>
                    </button>
                </div>
            </div>
        </li>
    );
}

export default ContactCard;