import React from "react";
import Tours from './components/Tours';
import data from './data';
import { useState } from "react";

const App = () => {

  const [tours, setTours] = useState(data);

  function removeTour(id){
    const newTours = tours.filter((tour)=>tour.id!==id);
    setTours(newTours);

  }


  if(tours.length===0){
    return(
      <div>
        <h1>No Tours Left</h1>
        <button onClick={()=>setTours(data)}>Refresh</button>
      </div>
    )
  }

  return (
    <div className="flex flex-col items-center">
      <Tours tours={tours} removeTour={removeTour}></Tours>
    </div>
  )
};

export default App;
