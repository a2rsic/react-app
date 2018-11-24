import React from 'react';

const UserCard = (props) => {
    const { usersList } = props;
    const userData = usersList.map((user, index) => {
        return (
            <div>
                
            </div>
           
        )
    })
  
}

export { UserCard }