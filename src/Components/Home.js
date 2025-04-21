import axios from "axios";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
// import { countriesData } from "./CountriesData";

const Home = ({ query }) => {
  const [data, setData] = useState([]);
  console.log({ data });

//   const fetchCountries = async () => {
//     const response = await axios.get('https://restcountries.com/v3.1/all');
//     return response.data;
//   };

//   const{data:countryList}=useQuery({
//     queryKey: ['countries'],
// queryFn: fetchCountries,
// })

  const handleGetData = async () => {
    try {
    //   const res = await fetch("https://restcountries.com/v3.1/all");
    //   const countryList = await res.json();

    const res=await axios.get('https://restcountries.com/v3.1/all')
    const countryList=res.data;

    
    console.log({countryList})
      setData(countryList); 
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleGetData();
  }, []);

  const filteredData = data?.filter((data) =>
    data?.name?.common.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      {filteredData.map((country) => {
        return <p>{country.name.common}</p>;
      })}
    </>
  );
};

export default Home;
