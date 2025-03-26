class LoginPage{

 private username="#user-name";
 private password="#password";
 private loginBtn="#login-button";

/**
 * 
 * @param username 
 */
 enterUserName(username:string){
    cy.get(this.username).click().type(username);

 }
/**
 * 
 * @param password 
 */
 enterPassword(password:string){
    cy.get(this.password).click().type(password);
    
 }
/**
 * click On Login
 */
 clickOnLogin(){
    cy.get(this.loginBtn).click();
 }

 
}
export default LoginPage;