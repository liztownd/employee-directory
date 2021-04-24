import React from 'react';
import { Button } from 'react-bootstrap';


function SortButton ({ getSort }) {
   return (<Button className="m-1" variant="secondary" onClick={() => getSort}>
    <i className="fas fa-chevron-down"></i></Button>)
}

export default SortButton;