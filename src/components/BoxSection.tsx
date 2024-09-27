import React from 'react'

interface BoxSectionProps {
  title: string
  subtitle?: string
  body: React.ReactNode
  parentClass: string
}

export const BoxSection: React.FC<BoxSectionProps> = ({
  title,
  subtitle,
  body,
  parentClass,
}) => (
  <div className={`${parentClass} flex flex-col`}>
    <div className="flex h-full flex-col">
      <div className="flex h-20 items-center justify-center rounded-t-lg bg-white p-4 text-center">
        <div>
          <h3
            className={`text-neutral-900 ${parentClass === 'boxStyle' ? 'font-serif text-xl font-medium' : 'text-2xl font-bold'}`}
          >
            {title}
          </h3>
          {subtitle && (
            <p className="mt-1 border-t border-gray-400 pt-1 text-xs text-gray-600">
              {subtitle}
            </p>
          )}
        </div>
      </div>
      <div className="text-md flex flex-grow items-start justify-center bg-neutral-900 p-4 text-white sm:p-8">
        <div>
          {React.Children.map(body as React.ReactElement, (child) =>
            React.cloneElement(child, {
              className: 'mb-2.5 last:mb-0',
            }),
          )}
        </div>
      </div>
    </div>
  </div>
)
