import { useState, useEffect } from "react";
import Results from "./components/Results";
import Search from "./components/Search";

export default function App() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('Facebook');
  
  useEffect(() => {
    fetch(`https://hn.algolia.com/api/v1/search?query=${search}&tags=story`)
    .then((response) => response.json())
    .then((data) => { 
      console.log(data.hits);
      setData(data.hits);
    });
  }, [search]); //passing query search as arg
  
  return (
    <div>
          <Search setSearch={setSearch}/>
          <Results data={data} />
      </div>
    );
  }

  
  /* useState is a hook that declares a state variable with an emptly array
  useEffect hook is a function that it takes an function and an array 
  of dependencies as argumentsny
  here is is used to fetch data from an API and set to data state using setData*/