import {By, until} from 'selenium-webdriver';

export default class LoginPage  {


    constructor(driver) {
        this.driver = driver;
        this.pageURL = "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login";
        this.userNameInputLocator = By.xpath("//input[@name='username' and @placeholder='Username']");
        this.userPasswordInputLocator = By.xpath("//input[@name='password' and @placeholder='Password']");
        this.loginButtonLocator = By.xpath("//button[@type='submit' and contains(normalize-space(), 'Login')]");
    }


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



}