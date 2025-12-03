# Sales Dashboard - Next.js 15 Application

A modern, feature-rich sales analytics dashboard built with Next.js 15, JavaScript, and Tailwind CSS. This application demonstrates atomic design principles, interactive data visualization, and API integration.

## 🚀 Features

### Core Features
- **Multi-Year Sales Data**: View sales data for 2022, 2023, and 2024
- **Interactive Charts**: Three chart types (Bar, Line, Pie) using Recharts
- **Custom Filtering**: Set custom sales threshold to filter data
- **Real-time Statistics**: Display total, average, max, and min sales
- **Responsive Design**: Fully responsive layout using Tailwind CSS

### Enhancements
- ✅ **Custom Filter Input**: Input field to set sales threshold
- ✅ **API Integration**: RESTful API endpoint for fetching sales data
- ✅ **Multiple Chart Types**: Switch between Bar, Line, and Pie charts

## 📁 Project Structure

This project follows **Atomic Design Principles**:

```
src/
├── app/
│   ├── api/
│   │   └── sales/
│   │       └── route.js          # API endpoint for sales data
│   ├── dashboard/
│   │   └── page.js               # Dashboard page
│   ├── layout.js                 # Root layout
│   ├── page.js                   # Home page
│   └── globals.css               # Global styles
├── components/
│   ├── atoms/                    # Basic building blocks
│   │   ├── Button.js
│   │   └── Input.js
│   ├── molecules/                # Composite components
│   │   ├── BarChart.js
│   │   ├── ChartTypeSelector.js
│   │   ├── FilterInput.js
│   │   ├── LineChart.js
│   │   ├── PieChart.js
│   │   ├── StatCard.js
│   │   └── YearSelector.js
│   └── organisms/                # Complex components
│       └── SalesChart.js
```

### Atomic Design Breakdown

- **Atoms**: `Button`, `Input` - Smallest, reusable UI elements
- **Molecules**: `FilterInput`, `ChartTypeSelector`, `YearSelector`, `StatCard`, chart components - Combinations of atoms
- **Organisms**: `SalesChart` - Complex components combining molecules

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: JavaScript
- **Styling**: Tailwind CSS
- **Charts**: Recharts
- **Architecture**: Atomic Design Principles

## 📦 Installation & Setup

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Step 1: Install Dependencies

```bash
npm install
```

This will install:
- Next.js 15
- React 18
- Recharts (for charting)
- Tailwind CSS and related dependencies

### Step 2: Run Development Server

```bash
npm run dev
```

The application will start on [http://localhost:3000](http://localhost:3000)

### Step 3: Build for Production

```bash
npm run build
npm start
```

## 🎯 Usage

1. **Navigate to Dashboard**: Click "Go to Dashboard" from the home page or visit `/dashboard`
2. **Select Year**: Choose between 2022, 2023, or 2024
3. **Change Chart Type**: Switch between Bar, Line, and Pie charts
4. **Filter Data**: Enter a minimum sales threshold to filter months
5. **View Statistics**: See total, average, max, and min sales for the selected data

## 📊 Data Source

The sales data is inspired by real-world sales patterns from Kaggle datasets. The mock data includes:
- Monthly sales figures for 2022, 2023, and 2024
- Realistic seasonal variations (e.g., higher sales in November/December)
- Year-over-year growth patterns

## 🔌 API Endpoints

### GET `/api/sales?year={year}`

Fetches sales data for a specific year.

**Parameters:**
- `year` (query): 2022, 2023, or 2024

**Response:**
```json
[
  { "month": "Jan", "sales": 45230 },
  { "month": "Feb", "sales": 38920 },
  ...
]
```

## 🎨 Component Architecture

### Atoms
- **Button**: Reusable button component with variants
- **Input**: Form input with label support

### Molecules
- **FilterInput**: Input field for sales threshold filtering
- **ChartTypeSelector**: Buttons to switch chart types
- **YearSelector**: Year selection buttons
- **StatCard**: Display card for statistics
- **BarChart**, **LineChart**, **PieChart**: Individual chart components

### Organisms
- **SalesChart**: Chart container that renders the appropriate chart type

## 🚀 Future Enhancements

- Connect to real API endpoints
- Add data export functionality
- Implement date range selection
- Add more chart types (Area, Radar, etc.)
- User authentication and personalization
- Data comparison across multiple years

## 📝 What Was Done

1. ✅ Created Next.js 15 project with JavaScript (not TypeScript)
2. ✅ Implemented atomic design structure (atoms, molecules, organisms)
3. ✅ Built three chart types using Recharts (Bar, Line, Pie)
4. ✅ Created mock sales data for 2022, 2023, and 2024
5. ✅ Developed dashboard page with all components integrated
6. ✅ Added custom filter input for sales threshold
7. ✅ Implemented chart type switcher
8. ✅ Created API route for sales data
9. ✅ Applied Tailwind CSS for modern, responsive design
10. ✅ Added statistics cards showing key metrics

## 🤝 Contributing

Feel free to fork this project and submit pull requests for any improvements.

## 📄 License

This project is open source and available for educational purposes.

---

Built with ❤️ using Next.js 15

