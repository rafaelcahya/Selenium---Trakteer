import loginPage from "../../pageObjects/login.page.js";
import createDriver from "../../utils/webdriver.js";
import logger from "../../utils/logger.js";
import { logging } from "../../utils/config.js";
import takeScreenshot from "../../utils/screenshot.js";

export default async function inputEmail() {
    const driver = createDriver();
    let page = new loginPage(driver);

    try {
        await page.openLoginPage();
        await page.inputEmail("example123@gmail.com");
        logger.info(logging.passedMsg);
        await takeScreenshot(driver);
    } catch (e) {
        logger.error(logging.failedMsg, e);
    } finally {
        await driver.quit();
    }
}

inputEmail();
