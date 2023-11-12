import { expect, jest, it, afterEach, beforeEach } from '@jest/globals';
import { Builder, By, until } from 'selenium-webdriver';
import { Options } from 'selenium-webdriver/chrome';
import LoginSteps from './Steps/login.steps';

describe('First Selenium Tests', () => {
    let driver;
   
    beforeEach(async () => {
        // Arrange
        let options = new Options();
        driver = await new Builder()
            .setChromeOptions(options)
            .forBrowser("chrome")
            .build();

        await driver.manage().setTimeouts({script: 60000});
        await driver.manage().setTimeouts({implicit: 10000});
        await driver.manage().window().maximize();
    });

    afterEach(async () => {
        await driver.quit();
    }) 

    it.skip('Login via POM', async () => {
        let loginSteps = new LoginSteps(driver)
        const userName= "Admin";
        const password = "admin123";
        const expectedTitle = "OrangeHRM";
        const expectedURL = "https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index";
      
        loginSteps.login(userName, password)
        await driver.sleep(3000);

        const actualTitle = await driver.getTitle();
        const actualURL = await driver.getCurrentUrl();

        expect(expectedURL).toBe(actualURL);
        expect(expectedTitle).toBe(actualTitle);
    }, 20000);

    it.skip('Login Invalid credentials', async () => {
        let loginSteps = new LoginSteps(driver)
       
        loginSteps.login('test', 'test')
        await driver.sleep(3000);
        const actualInvalidCredentialsText = await driver.findElement(By.xpath("//*[@class='oxd-text oxd-text--p oxd-alert-content-text']")).getText()

        expect('Invalid credentials').toBe(actualInvalidCredentialsText);

    }, 20000);

});
