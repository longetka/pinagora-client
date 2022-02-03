import React from 'react';
import GamesLink from '../../components/gamesLink/GamesLink';
import gamesLinksData from '../games/gamesLinksData';

const Games = () => {
    const renderGameLinks = gamesLinksData.map((item, index) => {
        return (
            <div className="gamesLink__container" key={index}>
                <GamesLink 
                    link={item.link}
                    img={item.img}
                    name={item.name}
                />
            </div>
        ) 
    });

    return (
        <div className="games">
            {renderGameLinks}
        </div>
    );
};

export default Games;
