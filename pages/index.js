import React , {Component} from 'react'
import MainLayout from '../components/layouts/mainLayout';
import axios from 'axios';

class Home extends Component {

    static getInitialProps = async ({pathname,query,asPath,req,res}) => {

        let userData;

        try {
            const response = await axios.get("https://jsonplaceholder.typicode.com/users/1")
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

        this.state = {
            user: this.props.user,
            userData: this.props.userData
        }
    }

    render() {
        console.log(this.state)
        return (
            <>
                <MainLayout>
                    <h1>Welcome to my first next.js app :)</h1>
                </MainLayout>
            </>
        )
    }
}

export default Home