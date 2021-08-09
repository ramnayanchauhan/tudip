import React, { useState } from 'react';
import './Style.css'
const Users = () => {
    const initialFormDta ={
        firstName: "",
        lastName: "",
        email: "",
    }
    const [formData, updateFormData] = useState(initialFormDta);
    const handleChange = (e) => {
        updateFormData({
            ...formData,

            // Trimming any whitespace
            [e.target.name]: e.target.value.trim()
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("User Data:", formData);
    }

    return (
        <div className="container">
            <div className="users-form">
                <h2>Welcome To Tudip Technology</h2>
                <p>User Details Form</p>
                <form>
                    <div>
                        <label>First Name</label>
                        <input type="text" name="firstName" onChange={handleChange} />
                    </div>
                    <div>
                        <label>Last Name</label>
                        <input type="text" name="lastName" onChange={handleChange} />
                    </div>
                    <div>
                        <label>Email</label>
                        <input type="text" name="email" onChange={handleChange} />
                    </div>

                    <div>
                        <button name="submit" id="submit" onClick={handleSubmit}>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default Users;