import { useEffect, useState } from 'react'
import './App.css'
import Watch from './components/Watch/Watch'

function App() {
  const [watches, setWatches] = useState([]);
  /* useEffect(()=>{
    fetch('watches.json')
    .then (res => res.json())
    .then(data => setWatches(data))
  },[]) */
  useEffect(() => {
    fetch('https://raw.githubusercontent.com/Ifthe16/es6-modules-overview/refs/heads/main/watches.json')
      .then(res => res.json())
      .then(data => setWatches(data))
  }, [])
  // const watches = [
  //   {id: 1, name: 'Apple watch', price:200},
  //   {id: 2, name: 'Samsu watch', price:200},
  //   {id: 3, name: 'MI watch', price:200},
  // ]

  /* const watches = [
    {
      id: 1,
      name: "Smart Watch X1",
      price: 199.99
    },
    {
      id: 2,
      name: "Smart Watch Pro 2",
      price: 249.99
    },
    {
      id: 3,
      name: "ActiveFit 3000",
      price: 179.50
    },
    {
      id: 4,
      name: "HealthTrack Plus",
      price: 220.00
    },
    {
      id: 5,
      name: "UltraWatch Max",
      price: 299.99
    }
  ]; */


  return (
    <>
      <h1>Vite + React</h1>
      {
        watches.map(watch => <Watch key={watch.id} watch={watch}></Watch>)
      }
    </>
  )
}

export default App
