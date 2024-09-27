import React from 'react'

interface ISectionTitle {
  text: string
  style?: React.CSSProperties
}

export const SectionTitle: React.FC<ISectionTitle> = ({ text, style }) => {
  return (
    <h2 className={`text-2xl font-semibold text-neutral-900`} style={style}>
      {text}
    </h2>
  )
}
