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


  
  return (
    <div>
      <Tours tours={tours} removeTour={removeTour}></Tours>
    </div>
  )
};

export default App;
