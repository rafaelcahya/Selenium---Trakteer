import { By, until } from "selenium-webdriver";
import { timeout } from "../utils/config.js";

class RegisterPage {
    constructor(driver) {
        this.driver = driver;
    }

    async openRegisterPage() {
        await this.driver.get("https://trakteer.id/register");
        await this.driver.wait(
            until.elementLocated(By.id("register")),
            timeout
        );
    }

    async inputUsername(username) {
        const inputField = await this.driver.wait(
            until.elementLocated(By.id("page")),
            timeout
        );

        await this.driver.wait(until.elementIsEnabled(inputField));
        await inputField.click();
        await inputField.sendKeys(username);
    }

    async inputName(name) {
        const inputField = await this.driver.wait(
            until.elementLocated(By.id("name")),
            timeout
        );
        await this.driver.wait(until.elementIsEnabled(inputField));
        await inputField.click();
        await inputField.sendKeys(name);
    }

    async inputEmail(email) {
        await this.driver
            .wait(until.elementLocated(By.id("email")), timeout)
            .sendKeys(email);
    }

    async inputPassword(password) {
        const inputField = await this.driver.wait(
            until.elementLocated(By.id("password")),
            timeout
        );

        await this.driver.wait(until.elementIsEnabled(inputField));
        await inputField.click();
        await inputField.sendKeys(password);
    }

    async prBoxPassword() {
        const box = await this.driver.wait(
            until.elementLocated(By.id("pr-box")),
            timeout
        );

        await this.driver.wait(until.elementIsVisible(box));
    }

    async togglePassword() {
        await this.driver
            .wait(
                until.elementLocated(By.className("toggle-password")),
                timeout
            )
            .click();
    }

    async inputConfirmationPassword(confirmationPassword) {
        const confirmationPasswordField = await this.driver.wait(
            until.elementLocated(By.id("password_confirmation")),
            timeout
        );

        await this.driver.wait(
            until.elementIsEnabled(confirmationPasswordField),
            timeout
        );
        await confirmationPasswordField.sendKeys(confirmationPassword);
    }

    async toggleConfirmationPassword() {
        const toggle = await this.driver.wait(
            until.elementLocated(By.className("toggle-password")),
            timeout
        );

        await this.driver.wait(until.elementIsEnabled(toggle), timeout);
        await checkbox.click();
    }

    async traktirCheckboxToggle() {
        const checkbox = await this.driver.wait(
            until.elementLocated(By.id("is-page-active")),
            timeout
        );

        await this.driver.wait(until.elementIsEnabled(checkbox), timeout);
        await checkbox.click();
    }

    async loginButton() {
        const button = await this.driver.wait(
            until.elementLocated(By.xpath("//a[contains(text(),'Login')]"))
        );

        await this.driver.wait(until.elementIsEnabled(button), timeout);
        await button.click();
    }

    async daftarButton() {
        const button = await this.driver.wait(
            until.elementLocated(By.id("btn-login")),
            timeout
        );

        await this.driver.wait(until.elementIsVisible(button));
        await button.click();
    }

    async emptyUsernameMessage() {
        const message = await this.driver.wait(
            until.elementLocated(
                By.xpath(
                    "//span[contains(text(), 'Bidang isian page wajib diisi.')]"
                )
            ),
            timeout
        );

        await this.driver.wait(until.elementIsVisible(message));
    }

    async emptyNameMessage() {
        const message = await this.driver.wait(
            until.elementLocated(
                By.xpath(
                    "//span[contains(text(), 'Bidang isian name wajib diisi.')]"
                )
            ),
            timeout
        );

        await this.driver.wait(until.elementIsVisible(message));
    }

    async emptyEmailMessage() {
        const message = await this.driver.wait(
            until.elementLocated(
                By.xpath(
                    "//span[contains(text(), 'Bidang isian email wajib diisi.')]"
                )
            ),
            timeout
        );
        await this.driver.wait(until.elementIsVisible(message));
    }

    async emptyPasswordMessage() {
        const message = await this.driver.wait(
            until.elementLocated(
                By.xpath(
                    "//span[contains(text(), 'Bidang isian password wajib diisi.')]"
                )
            ),
            timeout
        );
        await this.driver.wait(until.elementIsVisible(message));
    }

    async registeredUsername() {
        const message = await this.driver.wait(
            until.elementLocated(
                By.xpath(
                    "//span[contains(text(), 'Akun dengan username ini sudah terdaftar.')]"
                )
            )
        );

        await this.driver.wait(until.elementIsVisible(message));
    }

    async validateNameFieldMinLength() {
        const message = await this.driver.wait(
            until.elementLocated(
                By.xpath(
                    "//span[contains(text(), 'Isian name harus minimal 2 karakter.')]"
                )
            )
        );

        await this.driver.wait(until.elementIsVisible(message));
    }

    async validateNameFieldMaxLength() {
        const message = await this.driver.wait(
            until.elementLocated(
                By.xpath(
                    "//span[contains(text(), 'Isian name seharusnya tidak lebih dari 50 karakter.')]"
                )
            )
        );

        await this.driver.wait(until.elementIsVisible(message));
    }

    async validateEmailAddressFormat() {
        const message = await this.driver.wait(
            until.elementLocated(
                By.xpath(
                    "//span[contains(text(), 'Isian email harus berupa alamat surel yang valid.')]"
                )
            )
        );

        await this.driver.wait(until.elementIsVisible(message));
    }

    async validateEmailFieldMaxLength() {
        const message = await this.driver.wait(
            until.elementLocated(
                By.xpath(
                    "//span[contains(text(), 'Isian email seharusnya tidak lebih dari 40 karakter.')]"
                )
            )
        );

        await this.driver.wait(until.elementIsVisible(message));
    }

    async validatePasswordConfirmationMismatch() {
        const message = await this.driver.wait(
            until.elementLocated(
                By.xpath(
                    "//span[contains(text(), 'Konfirmasi password tidak cocok.')]"
                )
            )
        );
        await this.driver.wait(until.elementIsVisible(message));
    }

    async validateExistingEmail() {
        const message = await this.driver.wait(
            until.elementLocated(
                By.xpath(
                    "//span[contains(text(), 'Email ini sudah terdaftar.')]"
                )
            )
        );
        await this.driver.wait(until.elementIsVisible(message));
    }
}

export default RegisterPage;
