import React from 'react'
import { SectionTitle } from './SectionTitle'

interface IDetailProps {
  title: string
  detailSpecs1: DetailSpec[]
  detailSpecs2: DetailSpec[]
  detailSpecs3: DetailSpec[]
}

interface DetailSpec {
  title: string
  value: string
}

const DetailSpec: React.FC<DetailSpec> = ({ title, value }) => {
  return (
    <div className="mb-4">
      <div className="mt-4 text-xs uppercase leading-tight text-gray-600">
        {title}
      </div>
      <div className="mb-4 font-medium leading-relaxed text-blue-800">
        {value}
      </div>
    </div>
  )
}

const showDetailSpecs = (dsArray: DetailSpec[]) => {
  return dsArray.map((ds, index) => (
    <DetailSpec key={index} title={ds.title} value={ds.value} />
  ))
}

export const PropertyDetails: React.FC<IDetailProps> = ({
  title,
  detailSpecs1,
  detailSpecs2,
  detailSpecs3,
}) => {
  return (
    <>
      <SectionTitle text={title} />
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        <div>{showDetailSpecs(detailSpecs1)}</div>
        <div>{showDetailSpecs(detailSpecs2)}</div>
        <div>{showDetailSpecs(detailSpecs3)}</div>
      </div>
    </>
  )
}
