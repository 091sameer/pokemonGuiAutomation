class bulbapediaHomePage {
    get acceptCookies() {
        return cy.contains("Continue to Site", { timeout: 200000 })
    }

    get searchField() {
        return cy.get('[id=searchInput]', { timeout: 200000 })
    }

    get searchFieldAfterFilled() {
        return cy.get('[class=bg-global-nav-search-input]')
    }
}

module.exports = bulbapediaHomePage;