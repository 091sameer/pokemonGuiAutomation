class searchResultsPage {
    get searchResultsHeading() {
        return cy.get('[id=firstHeading]', { timeout: 200000 })
    }

    get searchResultsNumber() {
        return cy.get('[data-mw-num-results-total]', { timeout: 200000 })
    }

    get namespaceBulbapedia() {
        return cy.get('[id=mw-search-ns4]')
    }

    get namespaceMain() {
        return cy.get('[id=mw-search-ns0]')
    }

    get namespaceShipping() {
        return cy.get('[id=mw-search-ns104]')
    }

    get namespaceUserTalk() {
        return cy.get('[id=mw-search-ns3]')
    }

    get searchButton() {
        return cy.get('[class=oo-ui-actionFieldLayout-button]')
    }

    get namespaceHelp() {
        return cy.get('[id=mw-search-ns12]')
    }

    get namespaceCategory() {
        return cy.get('[id=mw-search-ns14]')
    }
}

module.exports = searchResultsPage;