import createDriver from "../../../utils/webdriver.js";
import RegisterPage from "../../../pageObjects/register.page.js";
import logger from "../../../utils/logger.js";
import { logging } from "../../../utils/config.js";

export default async function inputName() {
    const driver = createDriver();
    let page = await new RegisterPage(driver);

    try {
        await page.openRegisterPage();
        await page.inputName("Alexandra");
        logger.info(logging.passedMsg);
    } catch (e) {
        logger.error(logging.failedMsg, e);
    } finally {
        await driver.quit();
    }
}

inputName();
