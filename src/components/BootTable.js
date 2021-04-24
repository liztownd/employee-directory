import React from 'react';
//import API from '../utils/API';
import { Table } from 'react-bootstrap';
import TableBody from "./TableBody";
import SortButton from './SortButton';


function BootTable({ data }) {

    // const [loadingData, setLoadingData] = useState(true);

    // const [data, setData] = useState([]);

    // const [filter, setFilter] = useState("");

    // useEffect(() => {
    //     async function getData() {
    //         await API.getEmployees()
    //             .then(res => {
    //                 console.log(res.data.results);
    //                 setData(res.data.results)
    //                 setLoadingData(false)

    //             });
    //     }
    //     if (loadingData) {
    //         getData()
    //     }

    //     // eslint-disable-next-line 
    // }, [])


    // function getSort(d) {
    //     let newDataArray = d.sort((a, b) => (a.name.last > b.name.last) ? 1 : -1);
    //     setData(newDataArray);
    // }

    // function handleInputChange(e) {
    //     setFilter(e.target.value);
    // }


    return (
        <div>
            <Table striped>
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Name
                            <SortButton />
                        {/* <Button className="m-1" variant="secondary" onClick={() => props.getSort}>
                                <i className="fas fa-chevron-down"></i></Button> */}
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