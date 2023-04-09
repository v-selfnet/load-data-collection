import React, { useEffect, useState } from 'react';

const UseEffect = () => {
    const [data, setData] = useState([]);
    useEffect( () => {
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setData(data))
    }, []);
    return (
        <div>
            <h3>useState & useEffect</h3>
            <h3>Total Data: {data.length}</h3>
        </div>
    );
};

export default UseEffect;