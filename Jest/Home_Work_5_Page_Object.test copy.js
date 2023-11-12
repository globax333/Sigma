import { expect, jest, it, afterEach, beforeEach } from '@jest/globals';
import { Builder, By, until } from 'selenium-webdriver';
import { Options } from 'selenium-webdriver/chrome';
import LoginPage from './pages/login.page'
import { Name } from 'selenium-webdriver/lib/command';




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

    it('Login Test long version', async () => {
      
        const expectedTitle = "OrangeHRM";
        const expectedURL = "https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index";
        const actualTitle = await driver.getTitle();
        const actualURL = await driver.getCurrentUrl();


        await driver.get('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        await LoginPage.setUserName('Admin')
        await LoginPage.setUserPassword('admin123')
        await LoginPage.pressLoginButton()


        // Assert
        expect(expectedTitle).toBe(actualTitle);
        expect(expectedURL).toBe(actualURL);

       
    });
/*
    it('Validation forgot password form', async () => {
        
        const expected_Forgot_your_password = "Forgot your password?";
        const expectedURL_PasswordReset = "https://opensource-demo.orangehrmlive.com/web/index.php/auth/requestPasswordResetCode";
        const expectReset_Password_title = 'Reset Password'

        await driver.get(baseURL);
        const Forgot_your_password = await driver.findElement(By.xpath("//*[@class='orangehrm-login-forgot']"))
        const actual_Forgot_your_password = await Forgot_your_password.getText();
        
        expect(expected_Forgot_your_password).toBe(actual_Forgot_your_password);

        await Forgot_your_password.click()
        const actualdURL_PasswordReset = await driver.getCurrentUrl();
        const actualReset_Password_title = await driver.findElement(By.xpath("//form//h6")).getText()

        expect(expectedURL_PasswordReset).toBe(actualdURL_PasswordReset);
        expect('Reset Password').toBe(actualReset_Password_title)

        const User_name = await driver.findElement(By.xpath("//*[@name='username']"))
        const Cancel = await driver.findElement(By.xpath("//*[@type='button']"))
        const Submit = await driver.findElement(By.xpath("//*[@type='submit']"))

        const isClickable_User_name = await User_name.isDisplayed() && await User_name.isEnabled();
        const isClickable_Cancel = await Cancel.isDisplayed() && await Cancel.isEnabled();
        const isClickable_Submit = await Submit.isDisplayed() && await Submit.isEnabled();

        expect(isClickable_User_name).toBe(true);
        expect(isClickable_Cancel).toBe(true);
        expect(isClickable_Submit).toBe(true);
    })

    it('Forgot password functional check', async () => {
        const Username = 'Admin'
        const expectedURL_sendPasswordReset = "https://opensource-demo.orangehrmlive.com/web/index.php/auth/sendPasswordReset"
        const expect_Reset_success_title = 'Reset Password link sent successfully'

        await driver.get(baseURL);
        await driver.findElement(By.xpath("//*[@class='orangehrm-login-forgot']")).click()
        await driver.findElement(By.xpath("//*[@name='username']")).sendKeys(Username)
        await driver.findElement(By.xpath("//*[@type='submit']")).click()

        const actualURL_sendPasswordReset = await driver.getCurrentUrl();
       // const Reset_success_title = await driver.findElement(By.xpath("//*")).getText()
       
        expect(expect_Reset_success_title).toBe(Reset_success_title)
        expect(expectedURL_sendPasswordReset).toBe(actualURL_sendPasswordReset)
    })
    */
});


