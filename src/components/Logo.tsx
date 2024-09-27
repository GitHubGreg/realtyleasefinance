import React from 'react'

interface LogoProps {
  className?: string
}

export const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <div className={`flex flex-col items-center ${className}`}>
      <h1 className="text-5xl font-bold tracking-tight text-neutral-900">
        RELEAF
      </h1>
      <p className="text-md mt-0.5 border-t border-neutral-900 pt-0.5 font-medium text-neutral-600">
        Realty Lease Finance Corp
      </p>
    </div>
  )
}
