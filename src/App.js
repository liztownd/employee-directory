import { useState, useEffect } from 'react';
import Header from './components/Header';
import BootTable from './components/BootTable';
import API from './utils/API';
import Filter from './components/Filter';


function App() {

  const [loadingData, setLoadingData] = useState(true);

  const [data, setData] = useState([]);

  const [filteredData, setFilteredData] = useState([]);

	const [dataIsSorted, setDataIsSorted] = useState(false);

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


  function sortAsc(a, b) {
		if (a.name.last < b.name.last) return -1;
		if (a.name.last > b.name.last) return 1;
		return 0;
	};
  
	function getSort() {
		dataIsSorted
			? setData((prevData) => [...prevData.sort().reverse()])
			: setData((prevData) => [...prevData.sort(sortAsc)]);
		setDataIsSorted(!dataIsSorted);
	};

  function handleInputChange(e) {
      setFilter(e.target.value);
      
  };


  useEffect(() => {
		const allData = [...data];
		setFilteredData(
			allData.filter((d) =>
				d.name.last.toLowerCase().includes(filter.toLowerCase())
			)
		);
	}, [data, filter]);

  return (
    <div className="container-fluid">
    <Header />
    <Filter filter={filter} handleInputChange={handleInputChange}/>
    <BootTable 
    data={filteredData}
    getSort={getSort} />
    </div>
  );
}

export default App;
