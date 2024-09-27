import React from 'react'

interface ISectionTitle {
  text: string
  style?: React.CSSProperties
}

export const SectionTitle: React.FC<ISectionTitle> = ({ text, style }) => {
  return (
    <h2 className={`font-extrabold uppercase text-blue-800`} style={style}>
      {text}
    </h2>
  )
}
