import React, { createContext, useState } from 'react';
import ContextChild from './ContextChild';

export const SendData = createContext();

const ContextApi = () => {
    return (
        <div>
            <h2>Context-API</h2>
            <p>Passing Data Deeply with Context</p>
            <p>Data Can Send Around Directly & Avoid Prop Drilling</p>
            
            <SendData.Provider value='Send Data from Parent using Context'>
                <ContextChild></ContextChild>
            </SendData.Provider>

            <h2>Code Example:</h2>
        </div>
    );
};

export default ContextApi;

/*
    in Parent:
        1. create context
            export const receivData = createContext();
        
        2. set value
             <receivData.Provider value='Send Data'>
                <ContextChild></ContextChild>
            </receivData.Provider>
    
    in any Child:
        3. useContext


*/