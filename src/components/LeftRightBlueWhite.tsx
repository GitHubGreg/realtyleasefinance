import React from 'react'
import { SectionTitle } from './SectionTitle'

interface ILeftRightBlueWhiteProps {
  leftContent: React.ReactNode
  rightContent: React.ReactNode
  containerStyle?: React.CSSProperties
}

export const LeftRightBlueWhite: React.FC<ILeftRightBlueWhiteProps> = ({
  leftContent,
  rightContent,
  containerStyle,
}) => {
  return (
    <div
      className="flex flex-col rounded-2xl shadow-md sm:flex-row"
      style={containerStyle}
    >
      <div className="text-md w-full rounded-t-2xl bg-neutral-900 p-5 font-semibold text-white sm:w-1/2 sm:rounded-l-2xl sm:rounded-tr-none">
        {leftContent}
      </div>
      <div className="text-md w-full rounded-b-2xl bg-white p-5 font-semibold text-gray-600 sm:w-1/2 sm:rounded-r-2xl sm:rounded-bl-none">
        {rightContent}
      </div>
    </div>
  )
}
