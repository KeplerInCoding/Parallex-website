
import { useState } from "react";

function App() {

  const [count, setCount] = useState(0);

  function increaseHandler(){
    setCount(count+1);
  }

  function decreaseHandler(){
    setCount(count-1);

  }

  function resetHandler(){
    setCount(0);

  }




  return (
    <div className="w-[100vw] h-[100vh] flex flex-col items-center justify-center bg-gradient-to-b from-teal-300 to-green-200 gap-10">
      <h1 className="text-black text-[30px] font-extrabold">INCREMENTER AND DECREMENTER</h1>

      <div className="flex border-4 border-green-900 bg-green-900/20">
        <button onClick={increaseHandler} className="text-black text-[30px] font-extrabold w-16 border-r-2 m-2 border-green-900 hover:text-black/50">+</button>
        <div className="text-black text-center text-[30px] font-extrabold w-20 m-2 ">{count}</div>
        <button onClick={decreaseHandler} className="text-black text-[30px] font-extrabold w-16 border-l-2 m-2 border-green-900 hover:text-black/50">-</button>
      </div>

      <button onClick={resetHandler} className="text-black text-[30px] font-extrabold hover:text-[32px] hover:text-rose-800 h-10">RESET</button>

    </div>
  );
}

export default App;
