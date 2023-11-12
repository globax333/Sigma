import  LoginPage  from '../pages/login.page';

export default class LoginSteps {
  constructor(driver) {
    this.loginPage = new LoginPage(driver); 
  }

  async login(userName, password) {
    this.loginPage.open();
    this.loginPage.setUserName(userName);
    this.loginPage.setUserPassword(password);
    this.loginPage.pressLoginButton({force:true});
  }
}