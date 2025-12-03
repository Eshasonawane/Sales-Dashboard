import Input from '@/components/atoms/Input'

export default function FilterInput({ threshold, onThresholdChange }) {
  const handleChange = (e) => {
    const value = parseInt(e.target.value) || 0
    onThresholdChange(value)
  }

  return (
    <div className="w-full">
      <Input
        id="threshold-input"
        type="number"
        label="Sales Threshold Filter"
        placeholder="Enter minimum sales amount"
        value={threshold}
        onChange={handleChange}
        className="w-full"
      />
      <p className="text-xs text-gray-500 mt-1">
        Only show months with sales above ${threshold.toLocaleString()}
      </p>
    </div>
  )
}

