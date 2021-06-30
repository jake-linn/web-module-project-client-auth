import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";

import axiosWithAuth from '../auth/aixosWithAuth';

const friend = {
    name: "",
    age: "",
    email: ""
}

const EditFriend = () => {

    const [newFriend, setNewFriend] = useState(friend);
    
    let { push } = useHistory();
    let { id } = useParams();
    
    useEffect(() => {
        axiosWithAuth().get(`/friends/${id}`)
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }, [id])

    const handleChange = e => {
        setNewFriend({
            ...newFriend,
            [e.target.name]: e.target.value
        })
    };

    const handleSubmit = e =>{
        e.preventDefault()
        axiosWithAuth().put(`/friends/${id}`, newFriend)
            .then(() => {
                push("/protected")
            })
            .catch(err => console.log(err))
    };

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={newFriend.name}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="age"
                    placeholder="Age"
                    value={newFriend.age}
                    onChange={handleChange}
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={newFriend.email}
                    onChange={handleChange}
                />

                <button>Edit</button>
            </form>
        </div>
    )
}

export default EditFriend;