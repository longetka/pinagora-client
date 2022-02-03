import React from 'react';

const GamesLink = ({ link, img, name, key }) => {
    
    return (
        <a 
            href={link}
            className="gamesLink__link"
        >
            <img src={img} alt={name} className="gamesLink__img" />
            {name}
        </a>
    );
};

export default GamesLink;
