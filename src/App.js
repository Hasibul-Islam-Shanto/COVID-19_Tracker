import React,{useEffect, useState} from 'react';
import {Cards, Chart, CountryPicker} from './components';
import {fetchData} from './components/api/api';
import covidImage from './components/image.png';
function App() {

  const [info, setInfo] = useState({});
  const [country, setCountry] = useState("")

  useEffect(()=>{
   const getData = async() =>{
    const data =   await fetchData();
    setInfo(data);
   }
   getData();
  },[])
  const handleCountryChange = async (country) => {
     const data = await fetchData(country);
    setInfo(data);
    setCountry(data);
  };
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <img src={covidImage} alt="covid-19" style={{ marginTop: ".5rem" }} />
        <Cards info={info} />
        <CountryPicker handleCountryChange={handleCountryChange} />
        <Chart info = {info} country ={country} />
      </div>
    </>
  );
}

export default App;
