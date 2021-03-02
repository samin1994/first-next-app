import React , {Component} from 'react'
import MainLayout from '../components/layouts/mainLayout';

class Contact extends Component {

    render() {
        return (
            <MainLayout>
                <h1>Contact</h1>

                <div style={{color:'red'}}>
                    styled with inline css
                </div>
                <div className="jsx-class">
                    styled with styled-jsx
                </div>
                <style>
                    {`
                    .jsx-class {
                        color:blue
                    }
                    `}
                </style>

                <div className="contactstatic">
                    styled with static css
                </div>
                <div>
                    <img src="/static/images/image.jpeg" width="500px" height="400px"/>
                </div>
            </MainLayout>
        )
    }
}

export default Contact