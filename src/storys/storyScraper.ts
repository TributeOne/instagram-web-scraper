import { buttonClickerDyn$x } from "../../utils/buttonclicker"
import { getStringInsideDyn$xByAttribute } from "../../utils/getString"

//storyCaruselNames: Array<any>userName: string, storySeen: string, profileImage: string
export const storyScraper = async (page: any, userName: string) => {
    console.log(userName)
    await page.goto(`https://www.instagram.com/stories/${userName}/`)
    await page.waitForTimeout(1000)
    
    const latestPostDate = await getStringInsideDyn$xByAttribute(page, '//*[@id="mount_0_0_S+"]/div/div/div[1]/div/div/div/div[1]/div[1]/section/div[1]/div/section/div/header/div[2]/div[1]/div/div/div/div/time' , 'datetime', 'Story datetime Attribute')
    console.log(latestPostDate)

    
    await buttonClickerDyn$x(page, '//*[@id="mount_0_0_VP"]/div/div/div[1]/div/div/div/div[1]/div[1]/section/div[1]/div/section/div/div[1]/div/div/div/div[3]/button', 'Carousel On-Init-Next Button')


    //*[@id="mount_0_0_EC"]/div/div/div[1]/div/div/div/div[1]/div[1]/section/div[1]/div/div[5]/section/div/div[1]/div/div/div/div/div/div/video
    //*[@id="mount_0_0_x5"]/div/div/div[1]/div/div/div/div[1]/div[1]/section/div[1]/div/section/div/div[1]/div/div/img
    //*[@id="mount_0_0_0k"]/div/div/div[1]/div/div/div/div[1]/div[1]/section/div[1]/div/section/div/div[1]/div/div/div/div/div/div/video

    await page.waitForTimeout(1000)

    const postImage = await getStringInsideDyn$xByAttribute(page, '//*[@id="mount_0_0_x5"]/div/div/div[1]/div/div/div/div[1]/div[1]/section/div[1]/div/section/div/div[1]/div/div/img', 'src', 'Story src Attribute')
    console.log(postImage)
}



