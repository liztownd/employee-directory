import React, { useEffect, useState } from 'react';
import API from '../utils/API';
import { Table, Button } from 'react-bootstrap';

function BootTable() {

    const [loadingData, setLoadingData] = useState(true);

    const [data, setData] = useState([]);

    useEffect(() => {
        async function getData() {
            await API.getEmployees()
                .then(res => {
                    console.log(res.data.results);
                    setData(res.data.results)
                    setLoadingData(false)

                });
        }
        if (loadingData) {
            getData()
        }

        // eslint-disable-next-line 
    }, [])

    function formatPic(cell) {
        return (<img src={cell} alt={cell} />);
    };

    function formatDOB(cell) {
        return cell.split('T')[0];
    };

    const tableData = data.map(function (d) {
        return <tr key={d.dob.date}>
            <td>{formatPic(d.picture.thumbnail)}</td>
            <td>{d.name.first} {d.name.last}</td>
            <td>{d.phone}</td>
            <td>{d.email}</td>
            <td>{formatDOB(d.dob.date)}</td>
        </tr>
    });

    return (
        <Table striped>
            <thead>
                <tr>
                    <th>Image</th>
                    <th>Name 
                        <Button className="m-1" variant="secondary" ><i class="fas fa-chevron-down"></i></Button>
                        <Button className="m-1" variant="secondary"><i class="fas fa-chevron-up"></i></Button>
                        </th>
                    <th>Phone</th>
                    <th>Email</th>
                    <th>DOB</th>
                </tr>
            </thead>
            <tbody>
                {tableData}
            </tbody>
        </Table>
    )

};

export default BootTable;