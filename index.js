const cron = require('node-cron');
const moment = require('moment-timezone');
const fs = require('fs');
const scrape = require('./scrape');

// Schedule the job every minute, then check the time within the task
cron.schedule('0 0 * * 0', async () => {
    const currentTime = moment().tz('America/New_York');
        console.log('app running at', currentTime)
        console.log('Running  script');
        const jobs = await scrape();
        console.log(jobs); 

        // Define a filename with the current date
        const date = new Date();
        const filename = `jobs-${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}.txt`;

        // Save the job data to a text file
        fs.writeFile(filename, JSON.stringify(jobs, null, 2), (err) => {
            if (err) {
                console.error('Error writing file', err);
            } else {
                console.log(`Saved job data to ${filename}`);
            }
        });
});
