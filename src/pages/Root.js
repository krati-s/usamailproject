import React, { Fragment, useState } from 'react'
import Header from '../components/Header/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer/Footer'
import TextPopup from '../components/TextPopup/TextPopup'


export const Root = () => {
  const [active, setActive] = useState(null)
  const [visible, setVisible] = useState(false)
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const handleShow = () => {
    setIsSuccess(false)
    setShow(true)
  }
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 100) {
      setVisible(true)
    }
    else if (scrolled <= 100) {
      setVisible(false)
    }
  };

  window.addEventListener('scroll', toggleVisible);
  const scrollToTop = () => {
    const delay = 500
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }, delay)

  };
  return (
    <Fragment>
      <TextPopup isSuccess={isSuccess} setIsSuccess={setIsSuccess} show={show} close={handleClose} handleShow={handleShow} />
      {show && <div className='overlay-visible'></div>}
      <div className={`${show && 'overlay'}`}>
        <Header active={active} setActive={setActive} />
        <span onClick={scrollToTop} className={`scrollToTop ${visible ? 'd-flex' : 'd-none'}`}><i class="fas fa fa-arrow-up "></i></span>
        <Outlet />
        <Footer setActive={setActive} />
      </div>
    </Fragment>
  )
}