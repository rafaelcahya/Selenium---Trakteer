import createDriver from "../../utils/webdriver.js";
import loginPage from "../../../POM/loginPage.js";
import logger from "../../utils/logger.js";
import { logging } from "../../utils/config.js";

export default async function hidePassword() {
    const driver = createDriver();
    let page = new loginPage(driver);

    try {
        await page.openLoginPage();
        await page.togglePassword();
        await page.inputPassword("Example123");
        await page.togglePassword();
        logger.info(logging.passedMsg);
    } catch (e) {
        logger.error(logging.failedMsg, e);
    } finally {
        await driver.quit();
    }
}

hidePassword();
