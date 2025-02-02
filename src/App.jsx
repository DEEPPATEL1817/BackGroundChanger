import { useState } from 'react'


function App() {
  const [color, setColor] = useState("orange")

  return (
    <div className="w-full h-screen duration-200" style={{backgroundColor: color}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button onClick={()=>setColor("red")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg "style={{backgroundColor:'red'}}></button>
          <button onClick={()=>setColor("green")}  className="outline-none px-4 py-1 rounded-full text-white shadow-lg "style={{backgroundColor:'green'}}></button>
          <button  onClick={()=>setColor("blue")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg "style={{backgroundColor:'blue'}}></button>
          <button onClick={()=>setColor("orange")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg "style={{backgroundColor:'orange'}}></button>
          <button onClick={()=>setColor("purple")}  className="outline-none px-4 py-1 rounded-full text-white shadow-lg "style={{backgroundColor:'purple'}}></button>
          <button onClick={()=>setColor("grey")}  className="outline-none px-4 py-1 rounded-full text-white shadow-lg "style={{backgroundColor:'grey'}}></button>
          <button onClick={()=>setColor("grey")}></button>
        </div>
      </div>
    </div>
  )
}

export default App
