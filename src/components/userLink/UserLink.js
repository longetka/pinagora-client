import React from 'react';
import {Link} from 'react-router-dom';

const UserLink = ({name, to}) => {
    return (
        <Link to={to} className='userLink'>
            {name}
        </Link>
    );
};

export default UserLink;
