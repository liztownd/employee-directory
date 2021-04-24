import React from 'react';

function Filter({ filter, handleInputChange }) {


    return (
        <input type="text"
        className="form-control"
        placeholder="Search Last Name"
        aria-label="Name"
        value={filter}
        onChange={handleInputChange}
    >
    </input>

    )
};

export default Filter;