import React from 'react';

interface HeadingProps {
  level: 1 | 2 | 3 | 4 | 5 | 6
  children: React.ReactNode
  className?: string
  highlight?: string
}

const Heading = ({ level, children, className = "", highlight }: HeadingProps) => {
  const Tag = `h${level}` as keyof React.JSX.IntrinsicElements
  
  const baseClasses = {
    1: "text-5xl sm:text-6xl lg:text-7xl font-bold",
    2: "text-4xl sm:text-5xl font-bold",
    3: "text-2xl sm:text-3xl font-semibold",
    4: "text-xl sm:text-2xl font-semibold",
    5: "text-lg sm:text-xl font-medium",
    6: "text-base sm:text-lg font-medium"
  }

  if (highlight) {
    const parts = children?.toString().split(highlight)
    return (
      <Tag className={`${baseClasses[level]} text-white ${className}`}>
        {parts?.[0]}
        <span className="text-green-400">{highlight}</span>
        {parts?.[1]}
      </Tag>
    )
  }

  return (
    <Tag className={`${baseClasses[level]} text-white ${className}`}>
      {children}
    </Tag>
  )
}

export default Heading
