import React from 'react';
import UserCard from './UserCard';

const UsersLists = (props) => {
    const { listOfUsers } = props;
    const usersItem = listOfUsers.map((user, index) => {
        return (
            <UsersLists key={index}
            userName={user.name}
            userPicture={user.picture}
            userDate={user.date}
            userGender={user.gender}/>
        )
    })
}

export { UsersLists }