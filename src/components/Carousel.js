import React from 'react';

import battery from '../assets/images/battery.jpg';
import Haiti from '../assets/images/haiti.png';
import buddies from '../assets/images/buddies.png';
import didier from '../assets/images/didier.jpeg';
import leaf from '../assets/images/leaf.jpg';
import popcorn from '../assets/images/popcorn.png';
import wallet from '../assets/images/wallet.png';

class Carousel extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'COVID Tracker Haïti',
                    subTitle: 'COVID Cases tracker application for Haïti',
                    imgSrc: Haiti,
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
                    title: 'Buddies Gram',
                    subTitle: 'Instagram Clone using Flutter',
                    imgSrc: buddies,
                    link: 'https://github.com/didierganthier/buddies_gram',
                    selected: false
                },
                {
                    id: 4,
                    title: 'Leaf Recognition',
                    subTitle: 'Leaf Recognition Model',
                    imgSrc: leaf,
                    link: 'https://github.com/didierganthier/leaf_recognition',
                    selected: false
                },
                {
                    id: 5,
                    title: 'Wallet Home',
                    subTitle: 'Expense Manager Application',
                    imgSrc: wallet,
                    link: 'https://github.com/didierganthier/WalletHome',
                    selected: false
                },
                {
                    id: 6,
                    title: 'Flickster',
                    subTitle: 'Movie Trailer Application',
                    imgSrc: popcorn,
                    link: 'https://github.com/didierganthier/Flickster-2',
                    selected: false
                }
            ]
        }
    }

    render(){
        return(
            <p>Carousel Works!</p>
        );
    }
}

export default Carousel;