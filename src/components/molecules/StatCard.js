export default function StatCard({ title, value, icon }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-indigo-500">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-600 mb-1">{title}</p>
          <p className="text-2xl font-bold text-gray-900">{value}</p>
        </div>
        <div className="text-4xl">{icon}</div>
      </div>
    </div>
  )
}

