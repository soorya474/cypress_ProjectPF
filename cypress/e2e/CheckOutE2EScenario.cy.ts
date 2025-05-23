import LoginPage from "cypress/businessLogic/LoginPage.cy";
import Products from "cypress/businessLogic/ProductsPage.cy";
import CheckOut from "cypress/businessLogic/CheckOutInfoPage.cy";
//import CheckOut from 
const testData=require('../fixtures/QA.json')
let   lp=new LoginPage();
let pdt=new Products();
let ckOut=new CheckOut();


describe('Adding to Cart and Checkout Scenario',() =>{
    // before(() => {
    //     cy.visit(Cypress.env("baseUrl"));        
    // }); 
    
it("Login to the application",function(){
    cy.visit(Cypress.env("baseUrl"));  
    lp.enterUserName(testData.userName);
    lp.enterPassword(testData.password);
    lp.clickOnLogin();
    pdt.clickOnAnyProduct(testData.pdtName)
    //pdt.clickOnAddToCart();
    pdt.clickOnCartButton();
    pdt.clickOnCheckout();
    ckOut.enterFirstName(testData.firstName);
    ckOut.enterLastName(testData.lastName);
    ckOut.enterPostCode(testData.postCode);
    ckOut.clickOnContinue();
    ckOut.clickOnFinish();
    ckOut.validateCheckOutMsg(testData.msg);
});

});

