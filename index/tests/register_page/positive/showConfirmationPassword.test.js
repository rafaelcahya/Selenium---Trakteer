import createDriver from "../../../utils/webdriver.js";
import RegisterPage from "../../../pageObjects/register.page.js";
import logger from "../../../utils/logger.js";
import { logging } from "../../../utils/config.js";

export default async function showConfirmationPassword() {
    const driver = createDriver();
    let page = new RegisterPage(driver);

    try {
        await page.openRegisterPage();
        await page.inputConfirmationPassword("Alexandra123");
        await page.toggleConfirmationPassword();
        await driver.sleep(2000);
        logger.info(logging.passedMsg);
    } catch (e) {
        logger.error(logging.failedMsg, e);
    } finally {
        await driver.quit();
    }
}

showConfirmationPassword();
