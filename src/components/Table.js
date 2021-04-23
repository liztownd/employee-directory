import React, { useEffect, useState } from 'react';
import API from '../utils/API';
import { useTable } from 'react-table';

function Table() {

    const [loadingData, setLoadingData] = useState(true);
    const columns = React.useMemo(() => [
        {
            Header: "Image",
            accessor: "picture.thumbnail",
        },
        {
            Header: "First Name",
            accessor: "name.first",
        },
        {
            Header: "Last Name",
            accessor: "name.last",
        },

        {
            Header: "Phone",
            accessor: "phone",
        },
        {
            Header: "Email",
            accessor: "email",
        },
        {
            Header: "DOB",
            accessor: "dob.date",
        }
    ], []);

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

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({ columns, data })

    return (
        <div>
            {loadingData ? (<p>Data Loading, please wait</p>) : (
                <table {...getTableProps()} style={{ border: 'solid 1px blue' }}>
                    <thead>
                        {headerGroups.map(headerGroup => (
                            <tr {...headerGroup.getHeaderGroupProps()}>
                                {headerGroup.headers.map(column => (
                                    <th
                                        {...column.getHeaderProps()}
                                        style={{
                                            borderBottom: 'solid 3px red',
                                            background: 'aliceblue',
                                            color: 'black',
                                            fontWeight: 'bold',
                                        }}
                                    >
                                        {column.render('Header')}
                                    </th>
                                ))}
                            </tr>
                        ))}
                    </thead>
                    <tbody {...getTableBodyProps()}>
                        {rows.map(row => {
                            prepareRow(row)
                            return (
                                <tr {...row.getRowProps()}>
                                    {row.cells.map(cell => {
                                        return (
                                            <td
                                                {...cell.getCellProps()}
                                                style={{
                                                    padding: '10px',
                                                    border: 'solid 1px gray',
                                                    background: 'papayawhip',
                                                }}
                                            >
                                                {cell.render('Cell')}
                                            </td>
                                        )
                                    })}
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            )}
        </div>
    )
};

export default Table;