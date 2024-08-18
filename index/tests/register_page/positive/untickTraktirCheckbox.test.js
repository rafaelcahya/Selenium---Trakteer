import createDriver from "../../../utils/webdriver.js";
import RegisterPage from "../../../pageObjects/register.page.js";
import logger from "../../../utils/logger.js";
import { logging } from "../../../utils/config.js";

export default async function untickTraktirCheckbox() {
    const driver = createDriver();
    let page = new RegisterPage(driver);

    try {
        await page.openRegisterPage();
        await page.traktirCheckboxToggle();
        await page.traktirCheckboxToggle();
        logger.info(logging.passedMsg);
    } catch (error) {
        logger.error(logging.failedMsg, e);
    } finally {
        await driver.quit();
    }
}

untickTraktirCheckbox();
