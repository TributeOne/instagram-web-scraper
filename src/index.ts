import { Browser, Page } from 'puppeteer'
import puppeteer from 'puppeteer-extra'
import StealthPlugin from 'puppeteer-extra-plugin-stealth'
import { monitor } from '../utils/monitorLog'
import { storyCaruselScrape } from './storys/storycarousel/storyCarousel'
import { storyScraper } from './storys/storyScraper'

const startScraper = (URL: string) => {
    puppeteer.use(StealthPlugin()).launch({ headless: false, defaultViewport: null, args: ['--window-size=1920,1080', '--lang=en-US,en'], executablePath: '/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge', userDataDir: './WebProfiles/InstergramProfile1'}).then(async browser => {
        const page = await browser.newPage()

        page.setExtraHTTPHeaders({
            'Accept-Language': 'en'
        });
        await page.evaluateOnNewDocument(() => {
            Object.defineProperty(navigator, "language", {
                get: function() {
                    return "en-US";
                }
            });
            Object.defineProperty(navigator, "languages", {
                get: function() {
                    return ["en-US", "en"];
                }
            });
        });

        runMonitor(page, browser, URL)
    })
}

startScraper('https://www.instagram.com/')

const runMonitor = async (page: Page, browser: Browser, url: string) => {
    await accessWebsite(page, browser, url)
}

const firstTimeToLogIn = false

const accessWebsite = async (page: Page, browser: Browser, url: string) => {
    try {
        await page.goto(url, {timeout: 900000})
        firstTimeToLogIn ? await page.waitForTimeout(20000) : undefined
        //await page.waitForTimeout(10000)
        await storyCaruselScrape(page)
        //await storyScraper(page, 'user')
        //await page.waitForTimeout(10000)
        //await process.exit()
    }
    catch(e){
        monitor.log(`Error, website ${url} unavailable: ${e}`)
        await page.waitForTimeout(10000)
        await process.exit()
    }
}
