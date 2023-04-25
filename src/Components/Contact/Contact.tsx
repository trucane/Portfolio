
import React from 'react';
import { ContactCard } from "./ContactCard";
import contactData from '../../data/contacts.json';
import  "./contact.css";

export const Contact = () => {

    const handleSubmitForm = (e: React.FormEvent) => {
        e.preventDefault();
    };

    return <div className="contact-component">
        <div className="contact-component-left-side section">
            {contactData.data.contacts.map( (item, i) => (

                <ContactCard
                    key={i}
                    title={item.title}
                    logo={item.logo}
                    link={item.link}
                />
            ))}
        </div>
        <div className="contact-component-right-side section">
            <div className="form-container">
                <h6>Contact Us</h6>
                <p className="directions">All fields maked with * are required</p>
                <form onSubmit={(e: React.FormEvent) => handleSubmitForm(e)}>
                    <div className="form-row">
                        <div className="form-area">
                            <div className="label">
                                <label htmlFor="fName">First Name</label>
                            </div>
                            <input id="fName" type="text" required></input>
                        </div>
                        <div className="form-area">
                            <div className="label">
                                <label htmlFor="lName">Last Name</label>
                            </div>
                            <input id="lName" type="text" required></input>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-area">
                            <div className="label">
                                <label htmlFor="email">Email</label>
                            </div>
                            <input id="email" type="email" required></input>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-textarea">
                            <div className="label">
                                <label>Message</label>
                            </div>
                            <textarea  id="message" required/>
                        </div>
                    </div>

                    <button type="submit"> Submit</button>
                </form>
            </div>
        </div>
    </div>;
};