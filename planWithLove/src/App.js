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
      <div className="h-[100vh] w-[100vw] bg-gradient-to-tr from-slate-200 to-pink-200 flex flex-col items-center justify-center ">
        <div className="text-lg font-extrabold text-pink-700">No Tours Left</div>
        <button className="p-5 font-extrabold text-white text-3xl m-5 rounded-full bg-gradient-to-tl from-pink-800 to-zinc-600 hover:from-zinc-500 hover:to-pink-700 border border-black hover:scale-[1.2] shadow-lg shadow-black hover:shadow-2xl hover:shadow-black duration-200" onClick={()=>setTours(data)}>Refresh</button>
      </div>
    )
  }

  return (
    <div className="w-[100vw] bg-gradient-to-r from-slate-200 to-pink-100 flex flex-col items-center">
      <Tours tours={tours} removeTour={removeTour}></Tours>
    </div>
  )
};

export default App;
