import { Builder } from "selenium-webdriver";
import { browserConfig } from "./config.js";

function createDriver() {
    return new Builder().forBrowser(browserConfig.browserName).build();
}

export default createDriver;
