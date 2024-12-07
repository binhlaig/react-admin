import React from 'react'
import "./chart.scss"
import { LineChart, Line, XAxis,  CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: "January", Total: 1200, Total1 :1100 },
  { name: "February", Total: 2300, Total1 :1200 },
  { name: "March", Total: 800 ,Total1 :1400},
  { name: "April", Total: 1600 ,Total1 :1600},
  { name: "May", Total: 900 ,Total1 :1100},
  { name: "June", Total: 1700 ,Total1 :1600},
];

const Chart = () => {
 
  return (
    <div className='chart'>
      <div className="title">Last 6 Month (Revenue)</div>
      <ResponsiveContainer width="100%" aspect={2/1}>
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" className='chartGrid' />
          <XAxis dataKey="name" />
        
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="Total" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="Total1" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
   
    </div>
  )
}

export default Chart
