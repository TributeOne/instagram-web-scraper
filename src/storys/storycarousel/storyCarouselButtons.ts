import { Page } from "puppeteer-extra-plugin/dist/puppeteer"
import { buttonClickerDyn$x } from "../../../utils/buttonclicker"

class StoryCarouselButton{
    checkAvailability = {
        async next(page: any) {
            try {
                const dyn$x = `//div[starts-with(@id, "mount_")]${'//*[@id="mount_0_0_rH"]/div/div/div[1]/div/div/div/div[1]/div[1]/div[2]/section/main/div[1]/section/div[1]/div[2]/div/div/button[2]'.substring(23)}`
                await page.waitForXPath(dyn$x, {timeout: 500})
                return true
            }
            catch {
                return false
            }
        },
        async nextOnInit(page: Page) {
            try {
                const dyn$x = `//div[starts-with(@id, "mount_")]${'//*[@id="mount_0_0_BH"]/div/div/div[1]/div/div/div/div[1]/div[1]/div[2]/section/main/div[1]/section/div[1]/div[2]/div/div/button'.substring(23)}`
                await page.waitForXPath(dyn$x , {timeout: 500})
                return true
            }
            catch {
                return false
            }
        }
    }
    click = {
        async nextOnInit(page: Page) {
            await buttonClickerDyn$x(page, '//*[@id="mount_0_0_BH"]/div/div/div[1]/div/div/div/div[1]/div[1]/div[2]/section/main/div[1]/section/div[1]/div[2]/div/div/button', 'Carousel On-Init-Next Button')
        },
        async next(page: Page) {
            await buttonClickerDyn$x(page, '//*[@id="mount_0_0_T5"]/div/div/div[1]/div/div/div/div[1]/div[1]/div[2]/section/main/div[1]/section/div/div[2]/div/div/button[2]', 'Carousel Next Button')
        },
        async back(page: Page) {
            await buttonClickerDyn$x(page, '//*[@id="mount_0_0_T5"]/div/div/div[1]/div/div/div/div[1]/div[1]/div[2]/section/main/div[1]/section/div/div[2]/div/div/button[1]', 'Carousel Back Button')
        }
    }
}

export const storyCarouselButton = new StoryCarouselButton()