import React from 'react'
import QualityAbout from '../components/ServiceSection/QualityGuarantee/Quality'
import QualityStandards from '../components/ServiceSection/QualityGuarantee/standards'
import WarrantyTerms from '../components/ServiceSection/QualityGuarantee/Warranty'
import WarrantyClaimSection from '../components/ServiceSection/QualityGuarantee/Claim'
import QualityHeader from '../components/ServiceSection/QualityGuarantee/QualityHeader'

const Quality = () => {
  return (
    <div>
      <QualityHeader />
      <QualityAbout />
      <QualityStandards />
      <WarrantyTerms />
      <WarrantyClaimSection />
    </div>
  )
}

export default Quality
