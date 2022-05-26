import React from 'react'
import './Chart.css'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { grid } from '@mui/system';

export default function Chart({title, data, dataKey, grid}) {

  return (
    <div className='chart'>
      <h3 className="chartTitle">{title}</h3>
      <ResponsiveContainer width="100%" aspect={4/1}>
            <LineChart data={data}>
                <XAxis dataKey="name"/>
                <Line type="monotone" dataKey={dataKey}/>
                <Tooltip/>
                { grid && <CartesianGrid strokeDasharray="5 5"/>}
            </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
