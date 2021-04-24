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


  // function getSort(d) {
  //     let newDataArray = d.sort((a, b) => (a.name.last > b.name.last) ? 1 : -1);
  //     setData(newDataArray);
  // }

  function handleInputChange(e) {
      setFilter(e.target.value);
  }




  return (
    <div className="container-fluid">
    <Header />
    <Filter filter={filter} handleInputChange={handleInputChange}/>
    <BootTable data={data} />
    </div>
  );
}

export default App;
