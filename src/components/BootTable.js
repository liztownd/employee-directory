import React from 'react';
import { Table } from 'react-bootstrap';
import TableBody from "./TableBody";
import SortButton from './SortButton';


function BootTable({ data, getSort }) {


    return (
        <div>
            <Table striped>
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Name
                            <SortButton getSort={getSort}/>
                        </th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>DOB</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((d) => (
                        <TableBody
                            key={d.login.username}
                            image={d.picture.thumbnail}
                            nameFirst={d.name.first}
                            nameLast={d.name.last}
                            phone={d.phone}
                            email={d.email}
                            dob={d.dob.date.split('T')[0]}
                        />
                    ))}
                </tbody>
            </Table>
        </div>
    )

};

export default BootTable;