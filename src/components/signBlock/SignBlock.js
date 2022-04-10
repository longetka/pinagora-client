import React from 'react';
import {Link} from 'react-router-dom';

const SignBlock = () => {
    return (
        <div className='signBlock'>
            <Link
                className='signBlock__login'
                to='/login'
            >
                Войти
            </Link>
            <Link
                className='signBlock__register'
                to='/register'
            >
                Зарегистрироваться
            </Link>
        </div>
    );
};

export default SignBlock;
