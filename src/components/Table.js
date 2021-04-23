import React, { useEffect, useState } from 'react';
import API from '../utils/API';
import { useTable, useGlobalFilter, useSortBy } from 'react-table';

function Table() {

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

    // const Img = ({ colName, value }) => {
    //     if (colName === 'Image') {
    //         return <img src={value} alt={value} />;
    //     }
    // };

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
        // eslint-disable-next-line
    ], []);


    // const [filterInput, setFilterInput] = useState("");

    // const handleFilterChange = e => {
    //     const value = e.target.value || undefined;
    //     setFilter("data.name", value); // Update the show.name filter. Now our table will filter and show only the rows which have a matching value
    //     setFilterInput(value);
    // };

    // function setFilter() {

    // }

    function GlobalFilter({
        preGlobalFilteredRows,
        globalFilter,
        setGlobalFilter,
      }) {
        const count = preGlobalFilteredRows.length
        const [value, setValue] = React.useState(globalFilter)
        const onChange = (value => {
          setGlobalFilter(value || undefined)
        })
      
        return (
          <span>
            Search:{' '}
            <input
              value={value || ""}
              onChange={e => {
                setValue(e.target.value);
                onChange(e.target.value);
              }}
              placeholder={`${count} records...`}
              style={{
                fontSize: '1.1rem',
                border: '0',
              }}
            />
          </span>
        )
      }


    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable(
        { columns, data },
        useGlobalFilter,
        useSortBy)

    return (
        <div>
            {GlobalFilter()}
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
                                                    padding: '20px',
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