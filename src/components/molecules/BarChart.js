'use client'

import { BarChart as RechartsBarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

export default function BarChart({ data }) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <RechartsBarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip 
          formatter={(value) => [`$${value.toLocaleString()}`, 'Sales']}
          labelStyle={{ color: '#000' }}
        />
        <Legend />
        <Bar dataKey="sales" fill="#4F46E5" name="Sales" radius={[8, 8, 0, 0]} />
      </RechartsBarChart>
    </ResponsiveContainer>
  )
}

