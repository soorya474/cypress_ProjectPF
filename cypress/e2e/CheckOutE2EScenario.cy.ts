//import LoginPage from "cypress/businessLogic/LoginPage.cy";

import CheckOut from "../businessLogic/CheckOutInfoPage.cy";
import LoginPage from "../businessLogic/LoginPage.cy";
import Products from "../businessLogic/ProductsPage.cy";
//import CheckOut from 
import testData from '../fixtures/QA.json';
let   lp=new LoginPage();
let pdt=new Products();
let ckOut=new CheckOut();


describe('Adding to Cart and Checkout Scenario',() =>{
    // before(() => {
    //     cy.visit(Cypress.env("baseUrl"));        
    // }); 
    

    beforeEach(()=>{
        cy.visit(Cypress.env("baseUrl"));  
    lp.enterUserName(testData.userName);
    lp.enterPassword(testData.password);
    lp.clickOnLogin();
    });
    it("Login to the application",function(){
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

