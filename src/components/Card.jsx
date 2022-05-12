import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/components/Card.scss';

const Card = ({id, name, image, title}) => {
    const splitImage = image.full.split('.');
    const urlImage = `http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${splitImage[0]}_0.jpg`;
    
    return (
        <Link to={`${id}`}>
            <div className="card_champ">
                <img className="card_champ__image" src={urlImage} alt={splitImage[0]}/>
                <div className="card_champ__info">
                    <h3 className="card_champ__info-name">{name}</h3>
                    <p className="card_champ__info-title">{title}</p>
                </div>
            </div>
        </Link>
    );
}

export default Card;