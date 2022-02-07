import React from 'react';
import NavAppField from '../../components/navAppField/NavAppField';
import GamesLink from '../../components/gamesLink/GamesLink';
import gamesLinksData from '../games/gamesLinksData';

const Games = () => {
    const renderGameLinks = gamesLinksData.map((item, index) => {
        return (
                <GamesLink 
                    link={item.link}
                    img={item.img}
                    name={item.name}
                />
        ) 
    });

    return (
        <div className="games">
            <h3 className="games__title">Games</h3>
            <div className="gamesLink">
                {renderGameLinks}
            </div>
            <NavAppField />
        </div>
    );
};

export default Games;
