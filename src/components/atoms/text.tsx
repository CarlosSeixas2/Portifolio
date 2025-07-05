interface TextProps {
    variant?: 'body' | 'lead' | 'small' | 'muted'
    children: React.ReactNode
    className?: string
  }
  
  const Text = ({ variant = 'body', children, className = "" }: TextProps) => {
    const variants = {
      body: "text-gray-300 leading-relaxed",
      lead: "text-lg sm:text-xl text-gray-400 leading-relaxed",
      small: "text-sm text-gray-400",
      muted: "text-gray-500"
    }
  
    return (
      <p className={`${variants[variant]} ${className}`}>
        {children}
      </p>
    )
  }
  
  export default Text
  