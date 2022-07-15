import React, { useEffect, useState } from 'react';
import './App.css';
import Main from './components/Main';
import Header from './components/Header';
import { API } from './DAL/DAL';

const App = () => {

  const [arr, setArr] = useState([])

  useEffect(() => {
    API.getCurrency()
      .then(res => {
        setArr(res.data)
      })
  }, [])

  const objectUAH = {
    "r030": 1, "txt": "Гривня", "rate": 1, "cc": "UAH", "exchangedate": "15.07.2022"
  }

  const newArray = []
  newArray.push(objectUAH)
  arr.forEach(i => {
    i.cc === "USD" && newArray.push(i)
    i.cc === "EUR" && newArray.push(i)
    i.cc === "CAD" && newArray.push(i)
  })

  return (
    <>
      <div className='wrap app'>
        <Header ArrOfvalutas={newArray} />

        <Main ArrOfvalutas={newArray} />
      </div>
    </>
  )
}
export default App;
