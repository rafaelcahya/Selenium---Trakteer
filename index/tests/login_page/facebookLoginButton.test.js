import loginPage from "../../pageObjects/login.page.js";
import createDriver from "../../utils/webdriver.js";
import logger from "../../utils/logger.js";
import { logging } from "../../utils/config.js";

export default async function facebookLoginButton() {
    const driver = createDriver();
    let page = new loginPage(driver);

    try {
        await page.openLoginPage();
        await page.clickFacebookLoginButton();
        logger.info(logging.passedMsg);
    } catch (e) {
        logger.error(logging.failedMsg, e);
    } finally {
        await driver.quit();
    }
}

facebookLoginButton();
