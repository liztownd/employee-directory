import './App.css';
import { useState, useEffect } from 'react';
import Header from './components/Header';
//import Table from './components/Table';
import BootTable from './components/BootTable';
import API from './utils/API';
import Filter from './components/Filter';


function App() {

  const [loadingData, setLoadingData] = useState(true);

  const [data, setData] = useState([]);

  const [filter, setFilter] = useState("");

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

  function compareBy(a, b) {
    //function (a, b) {
      if (a.name.last < b.name.last) return -1;
      if (a.name.last > b.name.last) return 1;
      return 0;
  //  };
  };

  function getSort() {
    console.log(data);
      let newDataArray = [...data]
      newDataArray.sort(compareBy);
      setData({data: newDataArray});
  }

  function handleInputChange(e) {
      setFilter(e.target.value);
      
  }

  useEffect(() => {
    const filteredData = data.filter(function(d){
            return d.name.last
            .toLowerCase()
            .includes(filter.toLowerCase())

           
  //     // setData((previousData) => previousData.filter(function(d){
  //     //   return d.name.last
  //     //   .toLowerCase()
  //     //   .includes(filter.toLowerCase())
        
  //   }))
    })
    setData(filteredData);
  }, [filter, data]);

  return (
    <div className="container-fluid">
    <Header />
    <Filter filter={filter} handleInputChange={handleInputChange}/>
    <BootTable 
    data={data}
    getSort={getSort} />
    </div>
  );
}

export default App;
