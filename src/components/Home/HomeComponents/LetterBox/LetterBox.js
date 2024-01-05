import React from 'react'
import letterBox from '../../../../assets/images/letterbox.png'
import { letterBoxData } from '../../../../constants/constants'
import LetterBoxCard from '../../../commonCards/LetterBoxCard'
const LetterBox = () => {
  return (
    <section className="letterBox">
    <div className="container-fluid">
        <div className="row">
            <div className="col-md-6 px-0" data-aos="fade-right">
                <div className="letterBox-img">
                    <img src={letterBox} alt="letterBox-img" />
                </div>
            </div>
            <div className="col-md-6">
                <div className="letterBox-text">
                    <div className="letterBox-title">
                        <h1 className="sec_title" data-aos="fade-left" data-aos-delay="200"
                            data-aos-duration="1400">Let’s Get Started
                        </h1>
                    </div>
                    <div className="letterBox-list">
                <ul>
                {letterBoxData.map(letterBox => <LetterBoxCard {...letterBox} />)}
                </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}

export default LetterBox