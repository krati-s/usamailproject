import axios from 'axios';
import React, { Fragment, useState } from 'react';
import chat from '../../assets/svg/chat.svg'
import cross from '../../assets/svg/cross-svgrepo-com.svg'
import brandLogo from '../../assets/images/social-lexicon.png'
import { sendMessage } from '../../redux/slice/chatSlice';
import { useDispatch } from 'react-redux';
const TextPopup = ({ show, close, handleShow, isSuccess, setIsSuccess }) => {
  const dispatch = useDispatch()
  const [formData, setFormData] = useState({
    accountId: '11387',
    recipientPhone: '3098726245',
    chatId: '2e87e10a-6ffb-4fde-94d4-4b481c7a43ed',
    apiurl: 'https://app.textrequest.com/webservices/sms-chat',
    textName: '',
    mobilePhone: '',
    message: ''
  });
  const [errors, setErrors] = useState({
    textName: '',
    mobilePhone: '',
    message: ''
  });

  // Handle form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: '' });
  };

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    // Validate form data
    const validationErrors = {};

    if (!formData.textName.trim()) {
      validationErrors.textName = 'Name is required';
    }

    if (!formData.mobilePhone.trim()) {
      validationErrors.mobilePhone = 'Mobile Phone is required';
    }

    if (!formData.message.trim()) {
      validationErrors.message = 'Message is required';
    }
    // If there are validation errors, update the state and return
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    const chat1 = dispatch(sendMessage({textName : formData.textName , message : formData.message , mobilePhone : formData.mobilePhone}))
    console.log('sms',chat1.status);

    // Perform the API call
    try {
      const response = await axios.post(formData.apiurl, {
        accountId: formData.accountId,
        id: formData.chatId,
        message: formData.message,
        senderName: formData.textName,
        senderPhoneNumber: formData.mobilePhone,
        recipientPhoneNumber: formData.recipientPhone
      });

      console.log('SMS sent successfully!', formData, response.status);
      if (response.status == "200") {
        setIsSuccess(true)
      } else {
        setIsSuccess(false)
      }
    } catch (error) {
      console.error('Error sending SMS:', error);
      setIsSuccess(false)
      // Handle error and provide feedback to the user
    }
  };
  return (
    <Fragment>
      {!show ? <Fragment><button onClick={handleShow} className="chat-button">
        <img src={chat} alt='chat' />
      </button> </Fragment>: <button onClick={close} className="cross-button"><img src={cross} alt='cross' /></button>}
      {show ? <Fragment>
        {!isSuccess ? <Fragment>
          <div className="chat-window">
            <div className="chat-window__header" >We Will Text You! </div>
            <div className="chat-window__content">
              <div className="chat-window__content-hint">Enter your information, and we will text you shortly.</div>
              <form name="form" id="chat_form">
                <div className="input-container">
                  <input type="text" maxLength="40" className="ser-input" value={formData.textName}
                    onChange={handleChange} name="textName" placeholder="Name" required id="textName" />
         <div className="error-hint">{errors.textName}</div>
                </div>
                <div className="input-container">
                  <input type="text" className="ser-input" name="mobilePhone" value={formData.mobilePhone}
                    onChange={handleChange} placeholder="Mobile Phone" required id="mobilePhone" />
                   <div className="error-hint">{errors.mobilePhone}</div> 
                </div>
                <div className="input-container message">
                  <textarea maxLength="1000" type="text" className="ser-input" value={formData.message}
                    onChange={handleChange} name="message" placeholder="I would like to learn more about your business" required id="message"></textarea>
                  <div className="error-hint">{errors.message}</div>
                </div>

                <input type="hidden" name="accountId" value={formData.accountId} />
                <input type="hidden" name="recipientPhone" value={formData.recipientPhone} />
                <input type="hidden" name="chatId" value={formData.chatId} />
                <input type="hidden" name="apiurl" value={formData.apiurl} />
                <div className='chat-window__bottom-content'>
                  By texting us,you agree to receive text messages at the number provided. Standard message/data rates apply.
                </div>

                <div className="input-container button">
                  <button className="txr-button" onClick={handleSubmit}>Text us!</button>
                  <div className="error-hint">{errors.general}</div>
                </div>

              </form>
              <div id="data" style={{ backgroundColor: '#929392', color: '#FFFFFF' }}>
                <div className="success" style={{ display: 'none' }}>  <br />
                  We received your message!  <br /> We will text you back at your number</div>
              </div>
            </div>

            <div className="chat-form-footer">Powered by
              <img className='chat-brand-logo' src={brandLogo} alt='logo'></img>
            </div>
          </div>

        </Fragment> :<>
          <div className="chat-container">
            <div className="chat-heading">We Will Text You!</div>
            <div className="information-text">Enter your information, and we will text you shortly.</div>
            <div className=" left-message">
              <p className='information-number'>{formData.mobilePhone}</p>
              <p className='message'>I would like to learn more about your business</p>
            </div>
            <div className=" right-message">
              <p className='information-number'>+1-309-872-6245</p>
              <p className='bold-message '>We received your message!</p>
              <p className='message'>We will text you back at your number above.</p>
            </div>
            <div className="chat-window-footer">Powered by
              <img className='chat-brand-logo' src={brandLogo} alt='logo'></img>
            </div>
          </div>
          </>
        }
      </Fragment> : <div></div>}
    </Fragment>
  )
}

export default TextPopup