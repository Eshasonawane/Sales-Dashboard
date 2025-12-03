import Button from '@/components/atoms/Button'

export default function ChartTypeSelector({ chartType, onChartTypeChange }) {
  const chartTypes = [
    { type: 'bar', label: 'Bar Chart', icon: '📊' },
    { type: 'line', label: 'Line Chart', icon: '📈' },
    { type: 'pie', label: 'Pie Chart', icon: '🥧' },
  ]

  return (
    <div className="w-full">
      <label className="block text-sm font-medium text-gray-700 mb-2">
        Chart Type
      </label>
      <div className="flex gap-2 flex-wrap">
        {chartTypes.map(({ type, label, icon }) => (
          <Button
            key={type}
            onClick={() => onChartTypeChange(type)}
            variant={chartType === type ? 'primary' : 'secondary'}
            className="flex items-center gap-2"
          >
            <span>{icon}</span>
            <span>{label}</span>
          </Button>
        ))}
      </div>
    </div>
  )
}

