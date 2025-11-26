import { useState } from 'react'


function App() {
  const [color, setColor] = useState("magenta")

  return (
    <div className='w-full h-screen duration-200'
      style={{ backgroundColor: color }}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 mb-10'>
        <div className='fixed flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl border border-gray-400'>

          <button
            onClick={() => setColor("red")}
            className='outline-none rounded-lg px-4 py-1'
            style={{ backgroundColor: "red" }}>Red</button>

          <button
            onClick={() => setColor("green")}
            className='outline-none rounded-lg px-4 py-1'
            style={{ backgroundColor: "green" }}>Green</button>

          <button
            onClick={() => setColor("blue")}
            className='outline-none rounded-lg px-4 py-1'
            style={{ backgroundColor: "blue" }}>Blue</button>

          <button
            onClick={() => setColor("olive")}
            className='outline-none rounded-lg px-4 py-1'
            style={{ backgroundColor: "olive" }}>Olive</button>

          <button
            onClick={() => setColor("gray")}
            className='outline-none rounded-lg px-4 py-1'
            style={{ backgroundColor: "gray" }}>Gray</button>

          <button
            onClick={() => setColor("yellow")}
            className='outline-none rounded-lg px-4 py-1'
            style={{ backgroundColor: "yellow" }}>Yellow</button>

          <button
            onClick={() => setColor("pink")}
            className='outline-none rounded-lg px-4 py-1'
            style={{ backgroundColor: "pink" }}>Pink</button>

          <button
            onClick={() => setColor("Purple")}
            className='outline-none rounded-lg px-4 py-1'
            style={{ backgroundColor: "Purple" }}>Purple</button>

          <button
            onClick={() => setColor("lavender")}
            className='outline-none rounded-lg px-4 py-1'
            style={{ backgroundColor: "lavender" }}>Lavender</button>

          <button
            onClick={() => setColor("white")}
            className='outline-none rounded-lg px-4 py-1 shadow-black border border-gray-400'
            style={{ backgroundColor: "white" }}>White</button>

          <button
            onClick={() => setColor("black")}
            className='outline-none rounded-lg px-4 py-1 text-white'
            style={{ backgroundColor: "black" }}>Black</button>
        </div>
      </div>
    </div>
  )
}

export default App
