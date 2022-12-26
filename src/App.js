import React,{useState, useEffect}  from "react";
import "./App.css";
import Countries from "./components/Countries";
import Search from "./components/Search";


const url = "https://restcountries.com/v3.1/all";

function App() {
  
  const [isloading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [countries, setCountries] = useState([]);
  const [filtercountries, setFiltercountries] = useState(countries);

  const fetchData = async(url) =>{
    setLoading(true);

  try{
    const response = await fetch(url);
    const data = await response.json();
    setCountries(data);
    setFiltercountries(data);
    // console.log(countries);
    setLoading(false);
    setError(null);
    
  }catch(error){
    setLoading(false);
    setError(error)
  }
 };


  useEffect(() =>{
    fetchData(url)
  },[])
 
const handleRemoveCountry = (name) =>{
  const filter = filtercountries.filter((country) => country.name.common !== name);
  setFiltercountries(filter);
}

const handleSearch = (searchValue)=> {
  let value = searchValue.toLowerCase();
  const newCountries = countries.filter((country) =>{
    const countryName = country.name.common.toLowerCase();
    return countryName.startsWith(value)

  })
setFiltercountries(newCountries)
}

  return (
    <div>
      <h1>Country App</h1>
      <Search onSearch={handleSearch} />
      {isloading && <h2>Loading.....</h2>}
      {error && <h2>{error.messege}</h2>}
      {countries && <Countries countries ={filtercountries} onRemoveCountry = {handleRemoveCountry}/>}
    </div>
  );
}

export default App;
