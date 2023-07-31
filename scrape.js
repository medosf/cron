const puppeteer = require('puppeteer');

const scrapeLinkedIn = async () => {
    // Launch the browser and open a new page
    const browser = await puppeteer.launch({headless: true});
    const page = await browser.newPage();

    // Navigate to LinkedIn job search page
    await page.goto('https://www.linkedin.com/jobs/search/?keywords=React%20Developer');

    // Select the elements with the job info
    const jobs = await page.evaluate(() => {
        console.log('app starts and was able to visit the url')
        // let jobList = Array.from(document.querySelectorAll('.result-card__contents'));
        // return jobList.map(job => ({
        //     title: job.querySelector('.result-card__title').innerText,
        //     company: job.querySelector('.result-card__subtitle-link').innerText,
        //     location: job.querySelector('.result-card__location').innerText
        // }));
    });

    // Close the browser
    await browser.close();

    // Return the job data
    return jobs;
}

module.exports = scrapeLinkedIn;
