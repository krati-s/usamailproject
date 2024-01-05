import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

const PlaceOrderForm = () => {
    const scrollToTop = () => {
        setTimeout(() => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        })
    }
    useEffect(() => {
        scrollToTop()
    }, [])

    return (
        <div style={{display:'flex' , flexDirection : 'column' , alignItems : 'center' , margin : '10px'}}>
        <iframe id="listStoreFrame"
    style={{width:'920px', height:'700px' , marginLeft:'20%'}} frameborder="0"
    src="https://www.datawidgetcheckout.com/configList.php?e=656e0060049fe9.00712466"
    allow="payment" title='place-order'>
  </iframe>
  <a href="http://www.leadsplease.com" id="lplink" >Mailing Lists by LeadsPlease</a> 

  </div>


    )
}

export default PlaceOrderForm