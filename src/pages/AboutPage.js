import React from 'react';
import Hero from '../components/Hero';

function AboutPage(props) {
    return (
        <Hero title={props.title}/>
    );
}

export default AboutPage;