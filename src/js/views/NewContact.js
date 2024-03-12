import React, { useContext, useState } from 'react';
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";

import "../../styles/global.css";

export const NewContact = () => {

    const { store, actions } = useContext(Context);
    const { user } = useParams();
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');

    const addContact = () => {

        actions.addContact({
            fullName,
            email,
            phone,
            address,
            agenda_slug: user,
        })

        setFullName('');
        setEmail('');
        setPhone('');
        setAddress('');
    }

    return (
        <>
            <div className='container mt-4'>
                <div>
                    <label className="mb-2">Full name</label>
                    <input style={{ width: '20rem' }} className="form-control mb-4 w-4" type="text" placeholder="Full name" value={fullName} onChange={(e) => setFullName(e.target.value)}></input>
                    <label className="mb-2">Email</label>
                    <input style={{ width: '20rem' }} className="form-control mb-4" type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}></input>
                    <label className="mb-2">Phone</label>
                    <input style={{ width: '20rem' }} className="form-control mb-4" type="text" placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)}></input>
                    <label className="mb-2">Address</label>
                    <input style={{ width: '20rem' }} className="form-control mb-4" type="text" placeholder="Address" value={address} onChange={(e) => setAddress(e.target.value)}></input>
                </div>

                <Link to={"/contactLi/" + user} onClick={() => addContact()} className='btn btn-primary mb-2'>Save</Link>
                <Link to={"/contactLi/" + user} className=" h-100 d-block text-decoration-none">Go back to contacts</Link>
            </div >
        </>

    )
}