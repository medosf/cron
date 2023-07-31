const cron = require('node-cron');
const scrapeLinkedIn = require('./scrape');

cron.schedule('0 0 * * 0', async () => { // This will run once every Sunday at midnight
    console.log('Running LinkedIn job search');
    const jobs = await scrapeLinkedIn();
    console.log(jobs); // Print out the job data or do whatever you like with it
});
