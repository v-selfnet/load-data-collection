import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Axios = () => {
    const [phone, setPhone] = useState([]);
    useEffect( () => {
        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
        .then(data => {
            const loadedData = data.data.data
            console.log(loadedData)
        })
    }, []);

    return (
        <div>
            
        </div>
    );
};

export default Axios;