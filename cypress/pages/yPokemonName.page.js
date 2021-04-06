class yPokemonNamePage {
    get acceptCookies() {
        return cy.contains("Continue to Site", { timeout: 200000 })
    }

    get customerPageAddCustomerButton() {
        return cy.get('[data-testID=addCustomerBtn]', { timeout: 200000 });
    }
}

module.exports = yPokemonNamePage;