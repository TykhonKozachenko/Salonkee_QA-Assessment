import PageObject from "./PageObject";

class ProductsPageObject extends PageObject {
  url = '/products';

  addProductToCart(productId) {
    cy.getByProductId(productId).click();
  }

  clickContinueShoppingBtn() {
    cy.contains('.btn', 'Continue Shopping').click();
  }
}

export default ProductsPageObject;
