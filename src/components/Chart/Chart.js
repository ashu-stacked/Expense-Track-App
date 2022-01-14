import React from "react";
import './Chart.css'
import ChartBar from './ChartBar'

const Chart=(props)=>{
    const maximumValue=props.dataPoints.map(item=>{return item.value})
    const maximumTotalAmount=Math.max(...maximumValue)
    console.log(maximumTotalAmount)
return(
    <div className="chart">
        {props.dataPoints.map((item)=>{ return <ChartBar key={item.id} value={item.value} maxValue={maximumTotalAmount} label={item.label}/>})}
       
    </div>
);
}

export default Chart