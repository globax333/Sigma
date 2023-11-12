import {By, until} from 'selenium-webdriver';

export default class MyInfo  {


    constructor(driver) {
        this.driver = driver;
        this.MyInfo = By.xpath("//*[@href='/web/index.php/pim/viewMyDetails']");
        this.ContactDetails = By.xpath("//*[@href='/web/index.php/pim/contactDetails/empNumber/7']");
        this.Country = By.xpath("//div[@class='oxd-select-text-input']")
        this.Country_Algeria = By.xpath("//*[@role='listbox']//*[text()='Algeria']")
        this.submit = By.xpath("//button[@type='submit']")
    }

    async MyInfo_tab() {
        await this.driver.findElement(this.MyInfo).click()
    }
    async ContactDetails_tab() {
        await this.driver.findElement(this.ContactDetails).click()
    }
    async Country_dropdown() {
        await this.driver.findElement(this.Country).click()
    }
    async Select_Algeria() {
        await this.driver.findElement(this.Country_Algeria).click()
    }
    async Click_Submit() {
        await this.driver.findElement(this.submit).click()
    }

}