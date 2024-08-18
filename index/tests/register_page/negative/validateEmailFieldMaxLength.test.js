import createDriver from "../../../utils/webdriver.js";
import RegisterPage from "../../../pageObjects/register.page.js";
import logger from "../../../utils/logger.js";
import { logging } from "../../../utils/config.js";

export default async function validateEmailFieldMaxLength() {
    const driver = createDriver();
    let page = new RegisterPage(driver);

    try {
        await page.openRegisterPage();
        await page.inputEmail(
            "firstnamelastnamefirstnamelastnamefirstnamelastname@domain.com"
        );
        await page.daftarButton();
        await page.validateEmailFieldMaxLength();
        await driver.sleep(2000);
        logger.info(logging.passedMsg);
    } catch (e) {
        console.log("Testcase failed:", e);
    } finally {
        await driver.quit();
    }
}

validateEmailFieldMaxLength();
