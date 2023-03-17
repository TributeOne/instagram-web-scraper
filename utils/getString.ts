import { monitor } from "./monitorLog";

export const getStringInsideDyn$x = async (page: any, xpath: string, stringName: string) => {
    const dyn$x = `//div[starts-with(@id, "mount_")]${xpath.substring(23)}`
    try {
        const [element] = await page.$x(dyn$x);
        const xPathMessage = await page.evaluate((element: { textContent: any; }) => element.textContent, element)
        return xPathMessage
    } catch (error) {
        monitor.log(`Error while Searching for string: '${stringName}'`)
        return undefined
    }
}

export const getStringInsideDyn$xByAttribute = async (page: any, xpath: string, attribute: string, stringName: string) => {    
    try {
        const dyn$x = `//div[starts-with(@id, "mount_")]${xpath.substring(23)}`
        const buttonElement = await page.$x(dyn$x)
        const attributeString = await buttonElement[0].evaluate((el: Element, attr: string) => el.getAttribute(attr), attribute);
        //console.log(attributeString);
        return attributeString
    } catch (error) {
        monitor.log(`Error while Searching for attribute string: '${stringName}'`)
        return undefined
    }
}

