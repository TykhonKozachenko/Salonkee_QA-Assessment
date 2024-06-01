import PageObject from "./PageObject";

class ProductsPageObject extends PageObject {
  url = '/products';

  addProductToCart(productId) {
    cy.getByProductId(productId).click();
  }

  clickContinueShoppingBtn() {
    cy.get('.modal-footer > .btn').click();
  }
}

export default ProductsPageObject;
