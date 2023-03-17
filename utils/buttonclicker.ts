import { monitor } from "./monitorLog"

export const buttonClickerDyn$x = async (page: any, xpathButton: string, buttonName: string) => {
    const dyn$x = `//div[starts-with(@id, "mount_")]${xpathButton.substring(23)}`
    try {
        const elementHandle = await page.$x(dyn$x);
        await elementHandle[0].click();
        monitor.log(`Click '${buttonName}'`)
        await page.waitForTimeout(500)
    } catch (error) {
        monitor.log(`Error while Clicking button: '${buttonName}'`, error)
        await page.waitForTimeout(10000)
        await process.exit()
    }
}