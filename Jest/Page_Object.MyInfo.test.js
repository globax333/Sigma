import { expect, jest, it, afterEach, beforeEach } from '@jest/globals';
import { Builder, By, until } from 'selenium-webdriver';
import { Options } from 'selenium-webdriver/chrome';
import LoginSteps from './Steps/login.steps';
import MyInfo from './pages/myInfo.page'

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

    it.skip('My info', async () => {
        let loginSteps = new LoginSteps(driver)
        let myInfo = new MyInfo(driver)
        const userName= "Admin";
        const password = "admin123";
      
        loginSteps.login(userName, password)
        await driver.sleep(4000);
        myInfo.MyInfo_tab()
        await driver.sleep(2000);
        myInfo.ContactDetails_tab()
        await driver.sleep(2000);
        myInfo.Country_dropdown()
        await driver.sleep(2000);
        myInfo.Select_Algeria()
        myInfo.Click_Submit()
        await driver.sleep(2000);
    }, 40000);



});
