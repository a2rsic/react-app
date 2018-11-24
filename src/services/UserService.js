import BASE_ENDPOINT from './../shared/constants';
import User from '../entities/User';

const fetchDataUsers = () => {
    fetch(BASE_ENDPOINT)
        .then(response => {
            return response.json()
        })
        .then(response => {
            return response.results;
            
        })
        .then(data => {
            const usersList = data.map( data => {
                return new User (
                    data.picture.large, 
                    data.name,
                    data.email,
                    data.dob.date,
                    data.gender)
            })
            return usersList;
        })
}

export { fetchDataUsers }