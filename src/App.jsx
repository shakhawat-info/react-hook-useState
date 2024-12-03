import React from "react";
import "./App.css";
import { useState } from "react";
import RokoJara from './assets/stop.mp4'
function App() {
  let [count, setCount] = useState(1);
  

  function plus() {
    setCount((count = count + 1));
  }
  
  function minus(){
    setCount((count = count - 1));
  }

  return (
    <>
      <div className="flex justify-center gap-10">
        <button
          onClick={plus}
          type="button"
          className="py-2 px-10 rounded-md bg-[#201E43] text-white font-bold capitalize text-[30px] "
        >
          plus
        </button>
        <button type="button" className=" py-2 px-5 bg-[#686D76] rounded-md font-bold text-[30px] text-white ">{count}</button>
        {count > 0 ? 
        <button
        onClick={minus}
          type="button"
          className="py-2 px-10 rounded-md bg-[#201E43] text-white font-bold capitalize text-[30px] "
        >
          minus
        </button>
        :
        <video src={RokoJara} controls autoplay className="max-w-[200px]"></video>
        }
      </div>
    </>
  );
}

export default App;
