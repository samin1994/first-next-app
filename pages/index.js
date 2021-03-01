import React , {Component} from 'react'
import MainLayout from '../components/layouts/mainLayout';

class Home extends Component {

    render() {
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