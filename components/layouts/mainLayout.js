import React from 'react';
import Header from '../includes/header';
import Head from 'next/head';

const MainLayout = (props) => (
    <>
        <Head>
            <title>My Awesome App</title>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.6.0/css/bootstrap.min.css" integrity="sha512-P5MgMn1jBN01asBgU0z60Qk4QxiXo86+wlFahKrsQf37c9cro517WzVSPPV1tDKzhku2iJ2FVgL67wG03SGnNA==" crossorigin="anonymous" />
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap" rel="stylesheet" /> 
            <link href="/static/css/styles.css" rel="stylesheet"/>
        </Head>
        
        <div className="mainLayout_container">
            <Header />
            <div className="container">
                {props.children}
            </div>
        </div>
    </>
)

export default MainLayout;