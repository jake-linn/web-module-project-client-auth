import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import axiosWithAuth from '../auth/aixosWithAuth'

const friend = {
    name: "",
    age: "",
    email: ""
}

const AddFriend = () => {

    const [newFriend, setNewFriend] = useState(friend);

    let { push } = useHistory();

    const handleChange = e => {
        setNewFriend({
            ...newFriend,
            [e.target.name]: e.target.value
        })
    };

    const handleSubmit = e =>{
        e.preventDefault()
        axiosWithAuth().post("/friends", newFriend)
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

                <button>Add</button>
            </form>
        </div>
    )
}

export default AddFriend;