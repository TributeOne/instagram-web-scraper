import { getStringInsideDyn$x, getStringInsideDyn$xByAttribute } from '../../../utils/getString';
import { monitor } from '../../../utils/monitorLog';
import { storyCarouselButton } from './storyCarouselButtons';

const storyCaruselNamesRawData: Array<string> = []

export const storyCaruselScrape = async (page: any) => {

    let reachedEndOfStoryCarusel = false

    if (!await storyCarouselButton.checkAvailability.nextOnInit(page)){
        //If less then 13 Storys available Scraper loop wont start.
        storyCaruselNamesRawData.push(...await storyCaruselScrapeNames(page))
    }
    else {
        let nextOnInitButtonClicked = 0
        while (!reachedEndOfStoryCarusel) {
            if (!nextOnInitButtonClicked) {
                storyCaruselNamesRawData.push(...await storyCaruselScrapeNames(page))
                if (await storyCarouselButton.checkAvailability.nextOnInit(page)) {await storyCarouselButton.click.nextOnInit(page)}
                nextOnInitButtonClicked++;
            }
            else {
                //Check if Next Button is available
                if (await storyCarouselButton.checkAvailability.next(page)){
                    //If Button Next Button is Available (End of the Carousel NOT reached):
                    //Move to the right 3x
                    if (nextOnInitButtonClicked === 1) {
                        nextOnInitButtonClicked++;
                        //This query exists becouse we always want to move 3 Clicks forward
                    }
                    else {
                        if (await storyCarouselButton.checkAvailability.next(page)) {await storyCarouselButton.click.next(page)}
                    }
                    if (await storyCarouselButton.checkAvailability.next(page)) {await storyCarouselButton.click.next(page)}
                    if (await storyCarouselButton.checkAvailability.next(page)) {await storyCarouselButton.click.next(page)}
                    storyCaruselNamesRawData.push(...await storyCaruselScrapeNames(page))
                }
                else {
                    //If Button Next Button is not Available (End of the Carousel reached):
                    storyCaruselNamesRawData.push(...await storyCaruselScrapeNames(page))
                    reachedEndOfStoryCarusel = true
                }

            }
        }
    }

    let storyCaruselNames = [...new Set(storyCaruselNamesRawData)];

    monitor.log('storyCaruselNames', JSON.stringify(storyCaruselNames))
    
    return storyCaruselNames
}

const storyCaruselScrapeNames = async (page: any) => {

    const possibleNamesCaruselXPathes: Array<string> = []
    let runs: number = 3
    while (runs <= 13) {
        possibleNamesCaruselXPathes.push(`//*[@id="mount_0_0_k7"]/div/div/div[1]/div/div/div/div[1]/div[1]/div[2]/section/main/div[1]/section/div/div[2]/div/div/div/div/ul/li[${runs}]/div/button`)
        runs++;
    }

    const storyCaruselNamesRawDataTemp: Array<string> = storyCaruselNamesRawData

    const possibleNamesPromises: Array<any> = await Promise.all(
        possibleNamesCaruselXPathes.map(async (element) => {
            const storySeenString = (await getStringInsideDyn$xByAttribute(page, element, 'aria-label', 'Carousel Story aria-label Attribute')).split(" ").splice(-2).join(" ")
            const storySeenBool = !storySeenString.includes("not")
            const userName = await getStringInsideDyn$x(page, element, "Carousel Story Name")
            const userImage = await getStringInsideDyn$xByAttribute(page, element + '/div[1]/span/img', 'src', 'Carousel Story src Attribute')
            const data = {
                userName: userName,
                storySeen: storySeenBool,
                profileImage: userImage
            }
            return data
        })
    )

    const rawNames = await Promise.all(possibleNamesPromises).then((userNameData) => {
        return userNameData
    })

    rawNames.forEach(async name => {
        storyCaruselNamesRawDataTemp.push(name)
    })

    return storyCaruselNamesRawDataTemp
}