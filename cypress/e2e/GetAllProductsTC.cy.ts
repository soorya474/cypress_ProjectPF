
import CheckOut from "../businessLogic/CheckOutInfoPage.cy";
import LoginPage from "../businessLogic/LoginPage.cy";
import Products from "../businessLogic/ProductsPage.cy";
//import CheckOut from 
import testData from '../fixtures/QA.json';
let lp=new LoginPage();
let pdt=new Products();
let ckOut=new CheckOut();


describe('Get all the products',()=>{
beforeEach('Get All Products List',()=>{
        cy.visit(Cypress.env("baseUrl"));  
        lp.enterUserName(testData.userName);
        lp.enterPassword(testData.password);
        lp.clickOnLogin();
       
    });
it('Get All Products List',()=>{
        pdt.getAllProducts();
        pdt.validatePdtIsPresentOrNot(testData.pdtName);
});
})