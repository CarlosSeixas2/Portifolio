interface Stat {
    value: string
    label: string
  }
  
  interface StatsGridProps {
    stats: Stat[]
  }
  
  const StatsGrid = ({ stats }: StatsGridProps) => {
    return (
      <div className="grid grid-cols-3 gap-6 pt-6">
        {stats.map((stat, index) => (
          <div key={index} className="text-center">
            <div className="text-3xl font-bold text-green-400">{stat.value}</div>
            <div className="text-sm text-gray-400">{stat.label}</div>
          </div>
        ))}
      </div>
    )
  }
  
  export default StatsGrid
  