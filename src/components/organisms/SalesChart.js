'use client'

import BarChart from '@/components/molecules/BarChart'
import LineChart from '@/components/molecules/LineChart'
import PieChart from '@/components/molecules/PieChart'

export default function SalesChart({ data, chartType }) {
  const renderChart = () => {
    switch (chartType) {
      case 'bar':
        return <BarChart data={data} />
      case 'line':
        return <LineChart data={data} />
      case 'pie':
        return <PieChart data={data} />
      default:
        return <BarChart data={data} />
    }
  }

  return (
    <div className="w-full h-96">
      {renderChart()}
    </div>
  )
}

