import React from 'react'
import { Link } from 'react-router-dom'
import ContactCard from './ContactCard'

export default function ContactList(props) {

    const renderContactList = props.contacts.map((contact) => {
        return <ContactCard contact={contact} />
    })

    return (
        <div>
            <div className='container'>
                <div className='row pt-2'>
                    <div className='col-lg-4 offset-lg-4'>
                        <div className=' d-flex justify-content-between pt-5'><h4>Contact List</h4>
                          <Link to='/add'>  <button className='btn btn-success'> Add Contact</button></Link>
                        </div>
                    </div>
                </div>
            </div>
            {renderContactList}</div>
    )
}
