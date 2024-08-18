import createDriver from "../../../utils/webdriver.js";
import RegisterPage from "../../../pageObjects/register.page.js";
import logger from "../../../utils/logger.js";
import { logging } from "../../../utils/config.js";

export default async function validateNameFieldMaxLength() {
    const driver = createDriver();
    let page = new RegisterPage(driver);

    try {
        await page.openRegisterPage();
        await page.inputName(
            "RhoshandiatellyneshiaunneveshenkRhoshandiatellyneshiaunneveshenkRhoshandiatellyneshiaunneveshenk"
        );
        await page.daftarButton();
        logger.info(logging.passedMsg);
    } catch (e) {
        console.log("Testcase failed:", e.message);
    } finally {
        await driver.quit();
    }
}

validateNameFieldMaxLength();
