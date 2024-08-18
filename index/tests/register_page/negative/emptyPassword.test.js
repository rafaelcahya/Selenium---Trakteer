import { By } from "selenium-webdriver";
import createDriver from "../../../utils/webdriver.js";
import RegisterPage from "../../../pageObjects/register.page.js";
import logger from "../../../utils/logger.js";
import { logging } from "../../../utils/config.js";

export default async function emptyPassword() {
    const driver = createDriver();
    let page = new RegisterPage(driver);

    try {
        await page.openRegisterPage();
        await page.inputPassword("");
        await page.prBoxPassword();
        const prBox = await driver.findElement(By.id("pr-box"));
        await prBox.click();
        await page.daftarButton();
        await page.emptyPasswordMessage();
        logger.info(logging.passedMsg);
    } catch (e) {
        logger.error(logging.failedMsg, e);
    } finally {
        await driver.quit();
    }
}

emptyPassword();
