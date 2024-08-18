import { By, until } from "selenium-webdriver";

class ThirdPartyAuth {
	constructor(driver) {
		this.driver = driver
	}

    async clickFacebookLoginButton() {
        const button = await this.driver.wait(
            until.elementLocated(By.id("facebook-login")),
            2000
        );
        await button.click();
    }

    async clickGoogleLoginButton() {
        const button = await this.driver.wait(
            until.elementLocated(By.id("google-login")),
            2000
        );
        await button.click();
    }
}

export default ThirdPartyAuth