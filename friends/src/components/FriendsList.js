import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

import axioWithAuth from '../auth/aixosWithAuth';
import Friend from './Friend'

const FriendsList = () => {
    const [friends, setFriends] = useState([])

    useEffect(() => {

        axioWithAuth().get('/friends')
            .then(res => setFriends(res.data))
            .catch(err => console.log(err))

    }, [])


return(
    <div>
        <Link to = '/friends/add'> <button> Add Friend</button>  </Link>
        {friends.map(friend => 
        <Friend key={friend.id} friend={friend} />
        )}
    </div>
)


};

export default FriendsList;
