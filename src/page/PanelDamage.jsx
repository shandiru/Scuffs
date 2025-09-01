import React from 'react'
import PanelHeader from '../components/ServiceSection/Panel/PanelHeader'
import PanelRestoration from '../components/ServiceSection/Panel/PanelRestoration'
import PanelRepairs from '../components/ServiceSection/Panel/PanelRepairs'
import PanelContact from '../components/ServiceSection/Panel/PanelContact'
import PanelTransformation from '../components/ServiceSection/Panel/PanelTransformation'
import ServiceCards from '../components/ServiceSection/Panel/PanelContact'

const PanelDamage = () => {
  return (
    <div>
      <PanelHeader />
      <PanelRestoration />
      <PanelRepairs />
      <ServiceCards />
      <PanelTransformation />
    
    </div>
  )
}

export default PanelDamage
