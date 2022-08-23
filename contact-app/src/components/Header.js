import React from 'react'
import { Link } from 'react-router-dom'
import './all.css'

export default function Header() {
    return (
        <div>
            <div className='container'>
                <div className='row pt-5    '>
                    <div className='col-lg-4 offset-lg-4'>
                        <div className='text-center fw-600 shadow-lg p-2 my-header'>
                      <h3 className='text-white text-decoration-none'>Contact Manager</h3>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
