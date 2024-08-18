export const timeout = 5000;
export const browserConfig = {
    browserName: "chrome",
    headless: false,
    windowSize: {
        width: 1920,
        height: 1080,
    },
};

export const logging = {
    logToFile: false, // Set true, log will save into the file
    logPath: "../reports/logs/", // Path to save the log
    passedMsg: "Testcase passed",
    failedMsg: "Testcase failed"
};

export const report = {
    enableHtmlReport: true, // Activate report in HTML
    reportPath: "reports/testReport.html", // Path report HTML
};

export const screenshotConfig = {
    enableScreenshot: false, // Set true, screenshot will save into the folder
    screenshotPath: "../reports/screenshots/", // Path to save the screenshot
};
