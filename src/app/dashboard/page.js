'use client'

import { useState, useEffect } from 'react'
import SalesChart from '@/components/organisms/SalesChart'
import FilterInput from '@/components/molecules/FilterInput'
import ChartTypeSelector from '@/components/molecules/ChartTypeSelector'
import YearSelector from '@/components/molecules/YearSelector'
import StatCard from '@/components/molecules/StatCard'

export default function DashboardPage() {
  const [salesData, setSalesData] = useState([])
  const [filteredData, setFilteredData] = useState([])
  const [selectedYear, setSelectedYear] = useState(2024)
  const [chartType, setChartType] = useState('bar')
  const [threshold, setThreshold] = useState(0)
  const [stats, setStats] = useState({
    totalSales: 0,
    averageSales: 0,
    maxSales: 0,
    minSales: 0
  })

  useEffect(() => {
    fetchSalesData()
  }, [selectedYear])

  const fetchSalesData = async () => {
    try {
      const response = await fetch(`/api/sales?year=${selectedYear}`)
      const data = await response.json()
      setSalesData(data)
      setFilteredData(data)
      calculateStats(data)
    } catch (error) {
      console.error('Error fetching sales data:', error)
      // Fallback to mock data if API fails
      const mockData = generateMockData(selectedYear)
      setSalesData(mockData)
      setFilteredData(mockData)
      calculateStats(mockData)
    }
  }

  const generateMockData = (year) => {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    return months.map(month => ({
      month,
      sales: Math.floor(Math.random() * 50000) + 10000
    }))
  }

  const calculateStats = (data) => {
    const sales = data.map(item => item.sales)
    const total = sales.reduce((sum, val) => sum + val, 0)
    const average = total / sales.length
    const max = Math.max(...sales)
    const min = Math.min(...sales)
    
    setStats({
      totalSales: total,
      averageSales: average,
      maxSales: max,
      minSales: min
    })
  }

  const handleThresholdChange = (value) => {
    setThreshold(value)
    if (value === 0) {
      setFilteredData(salesData)
    } else {
      const filtered = salesData.filter(item => item.sales >= value)
      setFilteredData(filtered)
      calculateStats(filtered)
    }
  }

  const handleChartTypeChange = (type) => {
    setChartType(type)
  }

  const handleYearChange = (year) => {
    setSelectedYear(year)
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Sales Dashboard</h1>
          <p className="text-gray-600">Comprehensive sales analytics and insights</p>
        </div>

        {/* Year Selector */}
        <YearSelector selectedYear={selectedYear} onYearChange={handleYearChange} />

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard title="Total Sales" value={`$${stats.totalSales.toLocaleString()}`} icon="💰" />
          <StatCard title="Average Sales" value={`$${Math.round(stats.averageSales).toLocaleString()}`} icon="📊" />
          <StatCard title="Max Sales" value={`$${stats.maxSales.toLocaleString()}`} icon="📈" />
          <StatCard title="Min Sales" value={`$${stats.minSales.toLocaleString()}`} icon="📉" />
        </div>

        {/* Controls */}
        <div className="bg-white rounded-lg shadow-md p-6 space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <ChartTypeSelector chartType={chartType} onChartTypeChange={handleChartTypeChange} />
            </div>
            <div className="flex-1">
              <FilterInput threshold={threshold} onThresholdChange={handleThresholdChange} />
            </div>
          </div>
        </div>

        {/* Chart */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Sales Data for {selectedYear}
          </h2>
          {filteredData.length > 0 ? (
            <SalesChart data={filteredData} chartType={chartType} />
          ) : (
            <div className="text-center py-12 text-gray-500">
              No data available for the selected threshold
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

