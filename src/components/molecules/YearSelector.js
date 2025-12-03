import Button from '@/components/atoms/Button'

export default function YearSelector({ selectedYear, onYearChange }) {
  const years = [2024, 2023, 2022]

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <label className="block text-sm font-medium text-gray-700 mb-3">
        Select Year
      </label>
      <div className="flex gap-3">
        {years.map((year) => (
          <Button
            key={year}
            onClick={() => onYearChange(year)}
            variant={selectedYear === year ? 'primary' : 'secondary'}
            className="flex-1"
          >
            {year}
          </Button>
        ))}
      </div>
    </div>
  )
}

