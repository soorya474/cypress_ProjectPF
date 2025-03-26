
const testData=require('../fixtures/QA.json')
class Products{
// private addToCart="//button[contains(text(),'Add to cart')]/../preceding-sibling::div//div[contains(text(),{productName})]"
  private addToCart="button[data-test='add-to-cart-sauce-labs-backpack']";
  private cartBtn="a[data-test='shopping-cart-link']";
  private checkOutBtn="#checkout";
  private menuBtn="#react-burger-menu-btn";
  private inventoryContainer=".inventory_list";
  private inventoryItem=".inventory_item_price"
  /**
   * Method to add to cart
   */
  clickOnAddToCart(){
      cy.get(this.addToCart).click({force:true});
  }
   /**
   * click on cart button
   */
  clickOnCartButton(){
    cy.get(this.cartBtn).click();
  }
   /**
   * click on checkout
   */
  clickOnCheckout(){
    cy.get(this.checkOutBtn).click();
  }
  /**
   * click on Menu
   */
  clickOnMenuBtn(){
    cy.get(this.menuBtn).click();
  }
  /**
   * click on any product
   */
  clickOnAnyProduct(pdtName:string){
    cy.get(this.inventoryContainer).children().each(($el)=>{
      cy.wrap($el).find(this.inventoryItem).then(($name)=>{
        if($name.text().trim().includes(pdtName)){
          cy.wrap($el).find('button').click();
        }

      });

    });

}
}
export default Products;