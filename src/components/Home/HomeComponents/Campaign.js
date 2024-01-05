import React from 'react'
import { campaignData } from '../../../constants/constants'
import CampaignCard from '../../commonCards/CampaignCard'
const Campaign = () => {
  return (
    <section className="mail-campaign sec_pd">
            <div className="container">
                <h1 className="main_title2 text-center" data-aos="fade-down">Choose Your Direct Mail Campaign To Get Started
                </h1>
                <div className="row mc_row" data-aos="fade-down" data-aos-delay="200" data-aos-duration="1400">
                {campaignData.map(campaign => <CampaignCard {...campaign}  />)}
                </div>
                </div>
                </section>
  )
}

export default Campaign