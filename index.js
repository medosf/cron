const cron = require('node-cron');
const moment = require('moment-timezone');
const {sendSms} = require('./smsService')

cron.schedule('* * * * *', async () => {
    const currentTime = moment().tz('America/New_York');
        console.log('app running at', currentTime)
        console.log('Running  script');
        sendSms()
});
