import React, { useContext } from 'react';
import { SendData } from './ContextApi';

const ContextChild = () => {
    const ReceiveValue = useContext(SendData)
    return (
        <div>
            <h3>Context API Child</h3>
            <p>Received Value is: {ReceiveValue}</p>
        </div>
    );
};

export default ContextChild;