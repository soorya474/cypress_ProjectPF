import testData from '../fixtures/QA.json';
class CheckOut{
   private firstName="#first-name";
   private lastName="#last-name";
   private postCode="#postal-code";
   private continueBtn="#continue";
   private finishBtn="#finish";
   private msg="span[data-test='title']"
   /**
    * 
    * @param firstName 
    */
   enterFirstName(firstName:string){
      cy.get(this.firstName).type(firstName);

     }
   /**
    * 
    * @param lastName 
    */
   enterLastName(lastName:string){
      cy.get(this.lastName).type(lastName);

     }
    /**
     * 
     * @param postCode 
     */ 
   enterPostCode(postCode:string){
      cy.get(this.postCode).type(postCode);

     }
   /**
    * Method to click on continue Buuton
    */
   clickOnContinue(){
      cy.get(this.continueBtn).click();
     }
   /**
    * Method to click on finish Buuton
    */
   clickOnFinish(){
      cy.get(this.finishBtn).click();
     }
   /**
    * Method to validate Checkout msg
    */ 
   validateCheckOutMsg(msg:string){
      cy.get(this.msg).then(($el)=>{
         const text=$el.text();
         expect(text).to.be.equal(msg)
      })
     

     }
}
export default CheckOut;