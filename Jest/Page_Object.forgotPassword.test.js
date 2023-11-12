import { expect, jest, it, afterEach, beforeEach } from '@jest/globals';
import { Builder, By, until } from 'selenium-webdriver';
import { Options } from 'selenium-webdriver/chrome';
import ForgotPage from './pages/forgotPassword.page';
import LoginPage from './pages/login.page'

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

    it.skip('Forgot success', async () => {
        let forgotPage = new ForgotPage(driver)

        forgotPage.open()
        await driver.sleep(1000);
        forgotPage.User_name_field()
        await driver.sleep(1000);
        forgotPage.Submit_button()
        await driver.sleep(2000);

        const actualReset_Password_title = await driver.findElement(By.xpath("//h6")).getText()
        expect('Reset Password link sent successfully').toBe(actualReset_Password_title);
    }, 20000);

});
