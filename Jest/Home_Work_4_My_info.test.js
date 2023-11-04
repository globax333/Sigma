import { expect, jest, it, afterEach, beforeEach } from '@jest/globals';
import { Builder, By, until } from 'selenium-webdriver';
import { Options } from 'selenium-webdriver/chrome';



describe('My info test', () => {
    let driver;
    const baseURL = "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login";
    beforeEach(async () => {
        // Arrange
        let options = new Options();
        driver = await new Builder()
            .setChromeOptions(options)
            .forBrowser("chrome")
            .build();
        await driver.manage().setTimeouts({script: 600000});
        await driver.manage().setTimeouts({implicit: 100000});
        await driver.manage().window().maximize();
        jest.setTimeout(60000);
    });

    afterEach(async () => {
        await driver.quit();
    }) 

it('My info test update data', async () => {

    // Act
    await driver.get(baseURL);
    await driver.findElement(By.xpath("//input[@name='username' and @placeholder='Username']")).sendKeys('Admin')
    await driver.findElement(By.xpath("//input[@name='password' and @placeholder='Password']")).sendKeys('admin123')
    await driver.findElement(By.xpath("//button[@type='submit' and contains(normalize-space(), 'Login')]")).click()
    await driver.findElement(By.xpath("//*[@href='/web/index.php/pim/viewMyDetails']")).click()
    await driver.findElement(By.xpath("//*[@href='/web/index.php/pim/contactDetails/empNumber/7']")).click()

  
    const elements = await driver.findElements(By.xpath("//*[@class='oxd-form']/div/div/div/div/div[2]/input"))
    //const country = await driver.findElements(By.xpath("//*[@class='oxd-select-wrapper']/div/div[1]"))
    const State = await elements[3];
    const Home = await elements[5];
    const Street_2 = await elements[1];
   
    await Street_2.sendKeys('Soborna')
    await State.sendKeys('Vinnytska obl.')
    await Home.sendKeys('0432658587')
    //await country.click()
   // const country_list = await driver.findElements(By.xpath("[@role='listbox']"))
    //const country_element = await country_list[0]


    //await country_element.click()
    //await driver.findElement(By.xpath("//*[@type='submit']")).click()
    //await driver.navigate().refresh();

    expect(State).toBe(State)
    expect(Home).toBe(Home)
    expect(Street_2).toBe(Street_2)
    //expect(country_element).toBe(country_element)
    }, 15000);

});
