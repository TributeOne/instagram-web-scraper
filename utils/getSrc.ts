import { monitor } from "./monitorLog";

export const getSrcInsideDyn$x = async (page: any, xpathButton: string, stringName: string) => {
    const dyn$x = `//div[starts-with(@id, "mount_")]${xpathButton.substring(23)}`
    try {
        const element = await page.$x(dyn$x);
        const src = await page.evaluate((span: { getAttribute: (arg0: string) => any }) => span.getAttribute('src'), element[0])
        await page.waitForTimeout(10000)
        return src
    } catch (error) {
        monitor.log(`Error while Searching for src string: '${stringName}'`)
        return undefined
    }
}