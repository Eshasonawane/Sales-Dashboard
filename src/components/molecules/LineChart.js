'use client'

import { LineChart as RechartsLineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

export default function LineChart({ data }) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <RechartsLineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip 
          formatter={(value) => [`$${value.toLocaleString()}`, 'Sales']}
          labelStyle={{ color: '#000' }}
        />
        <Legend />
        <Line 
          type="monotone" 
          dataKey="sales" 
          stroke="#4F46E5" 
          strokeWidth={3}
          name="Sales"
          dot={{ r: 6 }}
          activeDot={{ r: 8 }}
        />
      </RechartsLineChart>
    </ResponsiveContainer>
  )
}

