import React from 'react';
import MainLayout from '../../components/layouts/mainLayout';
import axios from 'axios';

class Profile extends React.Component {

    static getInitialProps = async ({query}) => {

        let user;
        
        try {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${query.userId}`)
            user = response.data

        } catch (err) {
            console.log(err)
        }

        return {user}
    }

    showUser = (user) => {
        return (
            <div>
                <div>Name : {user.name}</div>
                <div>Phone : {user.phone}</div>
                <div>Email : {user.email}</div>
            </div>
        )
    }

    render() {
    
        return (
            <MainLayout>
                <br/>
                {this.showUser(this.props.user)}
            </MainLayout>
        )
    }
}

export default Profile