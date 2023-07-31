const twilio = require('twilio');

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;

const sendSms = async(sendToNumber)=> {
    const client = new twilio(accountSid, authToken);
    const date = new Date()
    try {
       const res =  await  client.messages.create({
            body: `Hello medo at ${date}, its a new month enjoy`,
            to: sendToNumber || '+14159880574',  // Replace with your phone number
            from: '+18663119127'
        })
        console.log('res',res)
    }catch (err){
        console.log('err',err)
    }
}
    

module.exports = {sendSms}