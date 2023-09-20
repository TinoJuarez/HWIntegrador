import React from 'react';
import errorImg from '../assets/error-4044.jpg';

const ErrorPage = () => {
    return (
        <div>
            <h1>Error 404 - Página no encontrada</h1>
            <img src={errorImg} alt="Error 404" />
        </div>
    );
};

export default ErrorPage;
