import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Loader = () => {
    const countries = useLoaderData();
    return (
        <div>
            <h3>Total Data Load: {countries.length}</h3>
        </div>
    );
};

export default Loader;