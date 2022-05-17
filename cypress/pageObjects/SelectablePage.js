import BasePage from "./BasePage";

class SelectablePage extends BasePage {
  static get url() {
    return "/selectable";
  }

  static get clickButton() {
    return cy.get("#verticalListContainer>li");
  }

  static get goToGrid() {
    return cy.get("#demo-tab-grid");
  }

  static get clickGridButtons() {
    return cy.get("#gridContainer");
  }

}

export default SelectablePage;
