import {By, until} from 'selenium-webdriver';
import  LoginPage  from '../pages/login.page';

export default class ForgotPage {


    constructor(driver) {
        this.driver = driver;
        this.loginPage = new LoginPage(driver); 
        this.Forgot_your_password = By.xpath("//*[@class='orangehrm-login-forgot']")
        this.User_name = By.xpath("//*[@name='username']")
        this.Cancel = By.xpath("//*[@type='button']")
        this.Submit = By.xpath("//*[@type='submit']")
        this.ForgotURL = "https://opensource-demo.orangehrmlive.com/web/index.php/auth/requestPasswordResetCode";
    }
    

    async open() {
        await this.driver.get(this.ForgotURL)
    }
    async Forgot_your_password_button() {
        await this.driver.findElement(this.Forgot_your_password).click()
    }
    async User_name_field() {
        await this.driver.findElement(this.User_name).sendKeys('test') 
    }
    async Cancel_button() {
        await this.driver.findElement(this.Cancel);
    }
    async Submit_button() {
        await this.driver.findElement(this.Submit).click() 
    }




/*
    const expected_Forgot_your_password = "Forgot your password?";
    const expectedURL_PasswordReset = "https://opensource-demo.orangehrmlive.com/web/index.php/auth/requestPasswordResetCode";
    const expectReset_Password_title = 'Reset Password'

    await driver.get(baseURL);
    const Forgot_your_password = await driver.findElement()
    const actual_Forgot_your_password = await Forgot_your_password.getText();
    
    expect(expected_Forgot_your_password).toBe(actual_Forgot_your_password);

    await Forgot_your_password.click()
    const actualdURL_PasswordReset = await driver.getCurrentUrl();
    const actualReset_Password_title = await driver.findElement(By.xpath("//form//h6")).getText()

    expect(expectedURL_PasswordReset).toBe(actualdURL_PasswordReset);
    expect('Reset Password').toBe(actualReset_Password_title)

    const User_name = await driver.findElement()
    const Cancel = await driver.findElement()
    const Submit = await driver.findElement()

    const isClickable_User_name = await User_name.isDisplayed() && await User_name.isEnabled();
    const isClickable_Cancel = await Cancel.isDisplayed() && await Cancel.isEnabled();
    const isClickable_Submit = await Submit.isDisplayed() && await Submit.isEnabled();

    expect(isClickable_User_name).toBe(true);
    expect(isClickable_Cancel).toBe(true);
    expect(isClickable_Submit).toBe(true);

    async open() {
        await this.driver.get(this.pageURL);
    }

    async setUserName(userName) {
        await this.driver.findElement(this.userNameInputLocator).sendKeys(userName);
    }

    async setUserPassword(password) {
        await this.driver.findElement(this.userPasswordInputLocator).sendKeys(password);
    }

    async pressLoginButton() {
        await this.driver.findElement(this.loginButtonLocator).click();
    }
*/
}

