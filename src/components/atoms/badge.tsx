interface BadgeProps {
    children: React.ReactNode
    variant?: 'default' | 'tech' | 'outline'
    className?: string
  }
  
  const Badge = ({ children, variant = 'default', className = "" }: BadgeProps) => {
    const variants = {
      default: "px-3 py-1 bg-green-500/10 text-green-400 text-xs rounded-full border border-green-500/20",
      tech: "px-4 py-2 bg-gray-800/50 text-gray-300 rounded-full border border-gray-700 hover:border-green-500/50 hover:text-green-400 hover:bg-green-500/5 transition-all duration-200 cursor-default",
      outline: "px-4 py-2 bg-transparent border border-gray-600 text-gray-300 rounded-full hover:border-green-500 hover:text-green-400 transition-all duration-200"
    }
  
    return (
      <span className={`${variants[variant]} ${className}`}>
        {children}
      </span>
    )
  }
  
  export default Badge
  