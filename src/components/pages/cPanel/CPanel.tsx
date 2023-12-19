import React from 'react'
import { AboutcPanel } from './about/AboutcPanel'
import { CpanelPricing } from './cpanelPricing/CpanelPricing'

export const CPanel = () => {
  return (
   <>
   <div className="pt-24">
    <AboutcPanel/>
   <CpanelPricing/>
   </div>
   
   </>
  )
}
