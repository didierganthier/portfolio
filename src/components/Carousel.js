import React from 'react';

import Card from '../components/Card'

import battery from '../assets/images/battery.png';
import virus from '../assets/images/virus.png';
import buddies from '../assets/images/buddies.png';
import didier from '../assets/images/didier.jpeg';
import leaf from '../assets/images/leaf.jpg';
import popcorn from '../assets/images/popcorn.png';
import wallet from '../assets/images/wallet.png';
import { Container, Row } from 'react-bootstrap';

class Carousel extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'COVID Tracker Haïti',
                    subTitle: 'COVID Cases tracker application for Haïti',
                    imgSrc: virus,
                    link: 'https://github.com/didierganthier/track_covid',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Didier Ganthier',
                    subTitle: 'Portfolio Website',
                    imgSrc: didier,
                    link: 'https://www.youtube.com/channel/UCxSITxL2JbF229OGCqieVZw',
                    selected: false
                },
                {
                    id: 2,
                    title: 'Battery Checker',
                    subTitle: 'A Battery Protection App',
                    imgSrc: battery,
                    link: 'https://play.google.com/store/apps/details?id=com.application.fullbatterywarning',
                    selected: false
                },
                {
                    id: 3,
                    title: 'Leaf Recognition',
                    subTitle: 'Leaf Recognition Model',
                    imgSrc: leaf,
                    link: 'https://github.com/didierganthier/leaf_recognition',
                    selected: false
                },
            ]
        }
    }

    handleCardClick = (id, card) => {
        console.log(id);

        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !== id){
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }

    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id}/>
        })
    }

    render(){
        return(
            <Container fluid={true}>
                <Row className='justify-content-around'>
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );
    }
}

export default Carousel;