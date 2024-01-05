import axios from "axios";
export const registerUserService = async (data) => {
    const response = await axios.post('https://app.textrequest.com/webservices/sms-chat', {
        accountId: '11387',
        id:'2e87e10a-6ffb-4fde-94d4-4b481c7a43ed',
        message: data.message,
        senderName: data.textName,
        senderPhoneNumber: data.mobilePhone,
        recipientPhoneNumber:'3098726245'
      });
      return response
  };
  