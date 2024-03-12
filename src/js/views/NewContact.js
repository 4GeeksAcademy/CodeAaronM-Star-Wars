import React from 'react';
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";

import "../../styles/global.css";

export const NewContact = () => {

    const { user } = useParams()

    return (
        <>
            <div className='container mt-4'>
                <div>
                    <label className="mb-2">Full name</label>
                    <input style={{ width: '20rem' }} className="form-control mb-4" type="text" placeholder="Full name" ></input>
                    <label className="mb-2">Email</label>
                    <input style={{ width: '20rem' }} className="form-control mb-4" type="text" placeholder="Email"></input>
                    <label className="mb-2">Phone</label>
                    <input style={{ width: '20rem' }} className="form-control mb-4" type="text" placeholder="Phone"></input>
                    <label className="mb-2">Address</label>
                    <input style={{ width: '20rem' }} className="form-control mb-4" type="text" placeholder="Address"></input>
                </div>

                <button onClick={() => addContact()} className='btn btn-primary mb-2'>Save</button>
                <Link to={"/contactLi/" + user} className=" h-100 d-block text-decoration-none">Go back to contacts</Link>
            </div>
        </>

    )
}