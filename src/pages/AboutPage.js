import React from 'react';
import Content from '../components/Content';
import Hero from '../components/Hero';

function AboutPage(props) {
    return (
        <div>
            <Hero title={props.title}/>
            <Content>
            <p>Hello, my name is Didier. I'm a full stack engineer with experience in Java, Flutter, Kotlin, Vanilla Javascript and React.</p>

            <p>My dream is to one day start my own business and become an entrepreneur (currently working on some ideas).</p>

            <p>I'm constantly learning new things. currently those things include gaining more experience with Flutter, React, Firebase, and Node JS</p>

            <p>My latest project, Track COVID, is a COVID cases tracker for my country(Haïti). You can check it out <a href="https://github.com/didierganthier/track_covid" target="_blank" rel="noopener noreferrer">here</a>, or on the homepage. It is built with Flutter. However, It is not published on any marketplace for now but will be soon</p>

            <p>When I'm not learning something new chances are I'm creating something nrew. You can find those <a href="https://github.com/didierganthier" target="_blank" rel="noopener noreferrer">here</a></p>
            </Content>
        </div>
    );
}

export default AboutPage;