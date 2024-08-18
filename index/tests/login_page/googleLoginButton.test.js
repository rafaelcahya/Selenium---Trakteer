import loginPage from "../../pageObjects/login.page.js";
import createDriver from "../../utils/webdriver.js";
import logger from "../../utils/logger.js";
import { logging } from "../../utils/config.js";

export default async function googleLoginButton() {
    const driver = createDriver();
    let page = new loginPage(driver);

    try {
        await page.openLoginPage();
        await page.clickGoogleLoginButton();
        logger.info(logging.passedMsg);
    } catch (e) {
        logger.error(logging.failedMsg, e);
    } finally {
        await driver.quit();
    }
}

googleLoginButton();
