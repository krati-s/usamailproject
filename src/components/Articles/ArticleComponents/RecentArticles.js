import React from 'react'
import { recentArticles } from '../../../constants/constants'
import RecentArticleCard from '../../commonCards/RecentArticleCard'
import user from "../../../assets/svg/user.svg"
import mail from '../../../assets/svg/mailTwo.svg'
import phone from '../../../assets/svg/PhoneTwo.svg'
import message from '../../../assets/svg/msg.svg'
import { Link } from 'react-router-dom'
const RecentArticles = () => {
    const submitHandler = () => {

    }
    return (
        <section className="recent-articles">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 recent-act">
                        <h1 className="sec_title" data-aos="fade-right">Our Recent Articles</h1>
                        <ul className="rec_ul">
                            {recentArticles.map(article => <RecentArticleCard {...article} />)}
                        </ul>
                    </div>
                    <div className="col-md-6" data-aos="fade-left">
                        <div className="art-r-box">
                            <h1 className="sec_title">
                                Need Any Help? Contact Us
                            </h1>
                            <form onSubmit={submitHandler}>
                                <div className="form-input">
                                    <input type="text" placeholder="Name" name='user' />
                                    <span className="input-icon">
                                        <img src={user} alt="user" />
                                    </span>
                                </div>
                                <div className="form-input">
                                    <input type="email" placeholder="Email Address" name='email' />
                                    <span className="input-icon">
                                        <img src={mail} alt="user" />
                                    </span>
                                </div>
                                <div className="form-input">
                                    <input type="text" placeholder="Phone Number" name='contact' />
                                    <span className="input-icon">
                                        <img src={phone} alt="user" />
                                    </span>
                                </div>
                                <div className="form-input">
                                    <textarea rows="4" cols="50" placeholder="Write you Message here" name='message'></textarea>

                                    <span className="input-icon">
                                        <img src={message} alt="user" />
                                    </span>
                                </div>
                                <Link className="btn y-btn hover-btn wave-btn" to="javascript:void(0)">Submit</Link>
                            </form>
                        </div>
                    </div>
                </div>
            </div></section>
    )
}

export default RecentArticles