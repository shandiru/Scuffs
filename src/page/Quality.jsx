import React from 'react'
import QualityAbout from '../components/QualityGuarantee/Quality'
import QualityStandards from '../components/QualityGuarantee/standards'
import WarrantyTerms from '../components/QualityGuarantee/Warranty'
import WarrantyClaimSection from '../components/QualityGuarantee/Claim'
import QualityHeader from '../components/QualityGuarantee/QualityHeader'

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
