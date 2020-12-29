import React from 'react'
import Header from "./components/header/Header"
import TeslaBattery from "./containers/TeslaBattery"
import "./TeslaRangeCalculator.css"
const counterDefaultVal = {
  speed: {
    title: "Speed",
    unit: "mph",
    step: 5,
    min: 45,
    max: 70
  },
  temperature: {
    title: "Outside Temperature",
    unit: "°",
    step: 10,
    min: -10,
    max: 40
  }
};

export const TeslaRangeCalculator = () => {
  return <div className="Tesla-App">
    <Header/>
    <TeslaBattery counterDefaultVal={counterDefaultVal}/>
  </div>
}
