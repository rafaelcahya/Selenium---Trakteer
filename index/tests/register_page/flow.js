import RegisterPage from "../../pageObjects/register.page.js";

async function registerFlow() {
    const driver = createDriver();
    let page = new RegisterPage(driver);

    try {
        await page.openRegisterPage();
        await page.inputUsername("excepteur");
        await page.inputName("Curran Hyde");
        await page.inputEmail("xebuxi@mailinator.com");
        await page.inputPassword("Pa$$w0rd!");
        await page.inputConfirmationPassword("Pa$$w0rd!");
        await page.traktirCheckboxToggle();
        await page.daftarButton();
        await driver.sleep(2000);
    } catch (e) {
        console.log(e);
    } finally {
        await driver.quit();
    }
}

registerFlow();
