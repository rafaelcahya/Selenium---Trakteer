import createDriver from "../../../utils/webdriver.js";
import RegisterPage from "../../../pageObjects/register.page.js";
import logger from "../../../utils/logger.js";
import takeScreenshot from "../../../utils/screenshot.js";
import { logging } from "../../../utils/config.js";

export default async function emptyEmail() {
    const driver = createDriver();
    let page = new RegisterPage(driver);

    try {
        await page.openRegisterPage();
        await page.inputEmail("");
        await page.daftarButton();
        await page.emptyEmailMessage();
        logger.info(logging.passedMsg);
        await takeScreenshot(driver);
    } catch (e) {
        logger.error(logging.failedMsg, e);
        await takeScreenshot(driver, e);
    } finally {
        await driver.quit();
    }
}

emptyEmail();
