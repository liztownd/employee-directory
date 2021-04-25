import React from 'react';
import { Button } from 'react-bootstrap';
import './sortButton.css'


function SortButton ({ getSort }) {
   return (<Button className="m-1" onClick={getSort}>
    <i className="fas fa-chevron-down"><i className="fas fa-chevron-up"></i></i></Button>)
}

export default SortButton;