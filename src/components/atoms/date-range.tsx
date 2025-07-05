interface DateRangeProps {
    startDate: string
    endDate?: string
    className?: string
  }
  
  const DateRange = ({ startDate, endDate, className = "" }: DateRangeProps) => {
    return (
      <span className={`text-green-400 font-medium text-sm ${className}`}>
        {startDate} - {endDate || "Presente"}
      </span>
    )
  }
  
  export default DateRange
  