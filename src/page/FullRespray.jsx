import React from 'react'
import FullHeader from '../components/ServiceSection/FullRespray/FullHeader'
import FullAbout from '../components/ServiceSection/FullRespray/FullAbout'
import PaintProcess from '../components/ServiceSection/FullRespray/Procees'
import PaintOptions from '../components/ServiceSection/FullRespray/PaintOption'
import ServiceOptions from '../components/ServiceSection/FullRespray/ServiceOption'
import VehicleTransformation from '../components/ServiceSection/FullRespray/VehicleTransformation'

const FullRespray = () => {
  return (
    <div>
      <FullHeader />
      <FullAbout />
      <PaintProcess />
      <PaintOptions />
      <ServiceOptions />
      <VehicleTransformation />
    </div>
  )
}

export default FullRespray