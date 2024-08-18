import createDriver from "../../../utils/webdriver.js";
import RegisterPage from "../../../pageObjects/register.page.js";
import logger from "../../../utils/logger.js";
import { logging } from "../../../utils/config.js";

export default async function emptyUsername() {
    const driver = createDriver();
    let page = new RegisterPage(driver);

    try {
        await page.openRegisterPage();
        await page.inputUsername("");
        await page.daftarButton();
        await page.emptyUsernameMessage();
        logger.info(logging.passedMsg);
    } catch (e) {
        console.log(e);
    } finally {
        await driver.quit();
    }
}

emptyUsername();
