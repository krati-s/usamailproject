import React from 'react'

const MissionCard = ({image , title , description}) => {
  return (
    <div className="col-md-6">'
                        <div className="m-box">
                            <div className="m-left">
                                <span className="w-circle">
                                    <img src={image} alt='circle' />
                                </span>
                            </div>
                            <div className="m-right">
                                <div className="m-title">
                                    <h2>{title}</h2>
                                </div>
                                <div className="m-description">
                                    <p>
                                       {description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
  )
}

export default MissionCard