import React from 'react'
import './all.css'

class AddContactList extends React.Component {
    state = {
        name: '',
        email: ''
    }
    addContact = (e) => {
        e.preventDefault();
        if (this.state.name === '' || this.state.email === '') {
            alert("Please Fill ou all the fields")
            return
        }
        this.props.addContactHandler(this.state);
        this.setState({ name: '', email: '' });
    }
    render() {
        return (
            <div>
                <div className='container'>
                    <div className='row pt-5'>
                        <div className='col-lg-4 offset-lg-4'>

                            <form className='shadow my-form' onSubmit={this.addContact}>
                                <h4 className='p-1 text-center'>
                                    Add Contact
                                </h4>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label">Name</label>
                                    <input type="text" className="form-control" id="exampleInputPassword1" value={this.state.name} onChange={(e) => {
                                        this.setState({ name: e.target.value })
                                    }} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Email </label>
                                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={this.state.email} onChange={(e) => {
                                        this.setState({ email: e.target.value })

                                    }} />
                                </div>
                                <button className="btn btn-success fw-semibold shadow-lg ">Add</button>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
export default AddContactList;