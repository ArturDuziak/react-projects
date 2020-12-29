import React from 'react'
import Header from "./components/header/Header"
import TeslaBattery from "./containers/TeslaBattery"
import "./TeslaRangeCalculator.css"

export const TeslaRangeCalculator = () => {
  return <div className="Tesla-App">
    <Header/>
    <TeslaBattery/>
  </div>
}
