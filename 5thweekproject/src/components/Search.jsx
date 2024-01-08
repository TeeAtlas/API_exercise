import React from 'react';
import PropTypes from "prop-types"

//declare functional component - in a func component what you return is rendered
export default function Search({setSearch}) {
    return (
        <input 
        //setting type of input field
        type="text"
        onChange={e => setSearch(e.target.value)} 
        //event handler updates search state when input/value changes
        />
    );

    Results.propTypes = {
        data: PropTypes.array
}

//event hanlder is an arrow function that receives a the event object e as an arg
//calls set search with curr val of input field
// which is assoc with e.target.value