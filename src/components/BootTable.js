import React, { useEffect, useState } from 'react';
import API from '../utils/API';
import { Table, Button } from 'react-bootstrap';
import TableBody from "./TableBody";

function BootTable() {

    const [loadingData, setLoadingData] = useState(true);

    const [data, setData] = useState([]);

   // const [filter, setFilter] = useState([]);

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

    // function formatPic(cell) {
    //     return (<img src={cell} alt={cell} />);
    // };

    // function formatDOB(cell) {
    //     return cell.split('T')[0];
    // };

    function getSort(d) {
       let newDataArray = d.sort((a, b) => (a.name.last > b.name.last) ? 1 : -1);
       setData(newDataArray);
    }

    // function handleInputChange {
        
    // }

    // const tableData = data.map(function (d) {
    //     return <tr key={d.dob.date}>
    //         <td>{formatPic(d.picture.thumbnail)}</td>
    //         <td>{d.name.first} {d.name.last}</td>
    //         <td>{d.phone}</td>
    //         <td>{d.email}</td>
    //         <td>{formatDOB(d.dob.date)}</td>
    //     </tr>
    // });


    return (
        <div>
  <input type="text" className="form-control" placeholder="Search Last Name" aria-label="Name" 
//   onChange={() => handleInputChange()}
  >
        </input>
        <Table striped>
            <thead>
                <tr>
                    <th>Image</th>
                    <th>Name 
                        <Button className="m-1" variant="secondary"  onClick={() => getSort(data)}>
                            <i className="fas fa-chevron-down"></i></Button>
                        {/* <Button className="m-1" variant="secondary" onClick={() => setSortedFieldAsc()}>
                            <i class="fas fa-chevron-up"></i></Button> */}
                        </th>
                    <th>Phone</th>
                    <th>Email</th>
                    <th>DOB</th>
                </tr>
            </thead>
            <tbody>
               {data.map((d) => (
               <TableBody
                   image={d.picture.thumbnail}
                   nameFirst={d.name.first}
                   nameLast={d.name.last}
                   phone={d.phone}
                   email={d.email}
                   dob={d.dob.date.split('T')[0]}
               />
                ) )}
            </tbody>
        </Table>
        </div>
    )

};

export default BootTable;