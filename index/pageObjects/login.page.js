import { By, until } from "selenium-webdriver";
import { timeout } from "../utils/config.js";

class Trakteer {
    constructor(driver) {
        this.driver = driver;
    }

    async openLoginPage() {
        await this.driver.get("https://trakteer.id/login");
        await this.driver.wait(until.elementLocated(By.id("login")), timeout);
    }

    async inputEmail(email) {
        const emailInputField = await this.driver.wait(
            until.elementLocated(By.id("email")),
            timeout
        );
        await emailInputField.sendKeys(email);
    }

    async inputPassword(password) {
        const passwordInputField = await this.driver.wait(
            until.elementLocated(By.id("password")),
            timeout
        );
        await passwordInputField.sendKeys(password);
    }

    async togglePassword() {
        const passwordToggle = await this.driver.wait(
            until.elementLocated(By.className("toggle-password")),
            timeout
        );
        await passwordToggle.click();
    }

    async lupaPasswordButton() {
        const button = await this.driver.findElement(
            By.xpath("//a[contains(text(),'Lupa Password?')]")
        );
        await button.click();
    }

    async daftarAjaDuluButton() {
        const button = await this.driver.findElement(
            By.xpath("//a[contains(text(),'Daftar aja dulu')]")
        );
        await button.click();
    }

    async loginButton() {
        const button = await this.driver.findElement(By.id("btn-login"));
        await button.click();
    }

    async invalidCredentialMessage() {
        await this.driver.wait(
            until.elementLocated(
                By.xpath("//div[contains(text(), 'Email atau password salah')]")
            ),
            timeout
        );
    }
}

export default Trakteer;
