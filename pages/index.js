import React , {Component} from 'react'
import MainLayout from '../components/layouts/mainLayout';
import axios from 'axios';
import Link from 'next/link';

class Home extends Component {

    static getInitialProps = async ({pathname,query,asPath,req,res}) => {

        let userData;

        try {
            const response = await axios.get("https://jsonplaceholder.typicode.com/users")
            userData = response.data
            console.log(userData)
        } catch {
            console.log('we got error!')
        }

        console.log(pathname)
        console.log(query)
        console.log(asPath)

        return {
            user: {
                firstName: 'samin',
                lastName: 'labbaf'
            },
            userData
        }
    }

    constructor(props) {
        super(props)

    }

    renderUsers = (users) => {
        return (
            users.map((user, index) => (
                <li className="list-group-item" key={user.id}>
                    <Link 
                    as = {`/users/profile/${user.id}`}
                    href = {{
                        pathname: '/users/profile',
                        query: {
                            userId: user.id
                        }
                    }}>
                        <a>{user.name}</a>
                    </Link>
                </li>
            ))
        )
    }

    render() {
        console.log(this.state)
        return (
            <>
                <MainLayout>
                    <br />
                    <h1>Pick a User</h1>
                    <ul className="list-group">
                        {this.renderUsers(this.props.userData)}
                    </ul>
                </MainLayout>
            </>
        )
    }
}

export default Home