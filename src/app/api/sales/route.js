// Mock sales data inspired by real sales patterns from Kaggle datasets
const salesData = {
  2022: [
    { month: 'Jan', sales: 45230 },
    { month: 'Feb', sales: 38920 },
    { month: 'Mar', sales: 52340 },
    { month: 'Apr', sales: 47890 },
    { month: 'May', sales: 56120 },
    { month: 'Jun', sales: 59450 },
    { month: 'Jul', sales: 62340 },
    { month: 'Aug', sales: 58760 },
    { month: 'Sep', sales: 54210 },
    { month: 'Oct', sales: 67120 },
    { month: 'Nov', sales: 78230 },
    { month: 'Dec', sales: 89120 },
  ],
  2023: [
    { month: 'Jan', sales: 51240 },
    { month: 'Feb', sales: 44560 },
    { month: 'Mar', sales: 58920 },
    { month: 'Apr', sales: 54380 },
    { month: 'May', sales: 62150 },
    { month: 'Jun', sales: 65420 },
    { month: 'Jul', sales: 68940 },
    { month: 'Aug', sales: 64890 },
    { month: 'Sep', sales: 59340 },
    { month: 'Oct', sales: 72180 },
    { month: 'Nov', sales: 83240 },
    { month: 'Dec', sales: 94150 },
  ],
  2024: [
    { month: 'Jan', sales: 57240 },
    { month: 'Feb', sales: 50120 },
    { month: 'Mar', sales: 65480 },
    { month: 'Apr', sales: 60890 },
    { month: 'May', sales: 68160 },
    { month: 'Jun', sales: 71390 },
    { month: 'Jul', sales: 75240 },
    { month: 'Aug', sales: 71020 },
    { month: 'Sep', sales: 64370 },
    { month: 'Oct', sales: 77240 },
    { month: 'Nov', sales: 88250 },
    { month: 'Dec', sales: 99180 },
  ],
}

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url)
    const year = parseInt(searchParams.get('year')) || 2024

    // Validate year
    if (![2022, 2023, 2024].includes(year)) {
      return Response.json(
        { error: 'Invalid year. Please use 2022, 2023, or 2024' },
        { status: 400 }
      )
    }

    const data = salesData[year] || salesData[2024]

    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 300))

    return Response.json(data)
  } catch (error) {
    console.error('Error in sales API:', error)
    return Response.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

