import React from 'react';

function TableBody(props) {
    
        return <tr key={props.dob.date}>
            <td><img src={props.image} alt={props.image}/></td>
            <td>{props.nameFirst} {props.nameLast}</td>
            <td>{props.phone}</td>
            <td>{props.email}</td>
            <td>{props.dob}</td>
        </tr>
 
};

export default TableBody;