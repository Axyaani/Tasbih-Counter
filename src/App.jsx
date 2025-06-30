import { useState } from "react"

function App() {
  const [Count, setCount]=useState(0)

 const increment = ()=>{
  setCount(Count+1)
 }
 
 const decrement =()=>{
  setCount(Count>0 ? Count-1 : 0)
 }
 const reset =()=>{
  setCount(0)
 }

return(
  <> 
<div className=" py-10">
    <div className="sm:p-10 bg-slate-400 sm:w-[500px] sm:ml-96 mt-10 rounded-lg shadow-lg w-96 p-20">
    <h1 className="text-center text-white font-bold text-3xl">TASBIH COUNTER </h1>
    <h1 className="border border-grey-600 text-center mt-5 mb-8 focus:outline-none text-white font-semibold text-2xl p-5">{Count}</h1>
   <div className="flex gap-4 -px-10   sm:-ml-5 -ml-20 w-16 sm:px-5">
     <button onClick={increment} className="px-12 py-2 bg-blue-500 text-white rounded-lg shadow-lg text-3xl">+</button>
    <button onClick={decrement} className="px-12  py-2 bg-green-500 text-white rounded-lg shadow-lg text-3xl">-</button>
    <button onClick={reset} className="px-10  bg-red-500 text-white rounded-lg shadow-lg text-xl">Reset</button>
   </div>

  </div>
</div>



  </>

)
}

export default App
