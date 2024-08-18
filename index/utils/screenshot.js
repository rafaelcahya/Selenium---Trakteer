import { writeFileSync, mkdirSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { screenshotConfig } from '../utils/config.js'

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

function getTimestamp() {
    const now = new Date();
    return `${now.getFullYear()}-${(now.getMonth() + 1).toString().padStart(2, '0')}-${now.getDate().toString().padStart(2, '0')}_${now.getHours().toString().padStart(2, '0')}-${now.getMinutes().toString().padStart(2, '0')}-${now.getSeconds().toString().padStart(2, '0')}`;
}

async function takeScreenshot(driver, fileName = 'screenshot.png') {
    if (!screenshotConfig.enableScreenshot) return;

    try {
        const directoryPath = join(__dirname, screenshotConfig.screenshotPath);
        
        // Rename timestamp to filename
        const timestamp = getTimestamp();
        const filePath = join(directoryPath, `${fileName.replace('.png', `_${timestamp}.png`)}`);

        if (!existsSync(directoryPath)) {
            mkdirSync(directoryPath, { recursive: true });
        }

        const screenshot = await driver.takeScreenshot();
        writeFileSync(filePath, screenshot, 'base64');
        console.log(`Screenshot is saved at ${filePath}`);
    } catch (error) {
        console.error('Screenshot failed:', error);
    }
}

export default takeScreenshot;
