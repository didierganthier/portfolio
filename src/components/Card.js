import React from 'react';
import CardInfo from '../components/CardInfo'

function Card(props){
    return(
        <div>
            <img className="" src={props.item.imgSrc} alt="project"/>
            { props.item.selected && <CardInfo title={props.item.title} subTitle={props.item.subTitle} link={props.item.link}/> }
        </div>
    );
}

export default Card;