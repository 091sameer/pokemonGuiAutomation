import {
    Given,
    Then,
    When,
} from "cypress-cucumber-preprocessor/steps";
const timeout = 200000
const bulbapediaHomePage = require('../../pages/bulbapediaHome.page.js');
const BulbapediaHomePage = new bulbapediaHomePage();
const searchResultsPage = require('../../pages/searchResults.page.js');
const SearchResultsPage = new searchResultsPage();

Given("Navigate to the main page", function () {
    cy.visit("/Main_Page");
    BulbapediaHomePage.acceptCookies.click();
    BulbapediaHomePage.searchField.should("be.visible")
});

Given("Type {string} in the search field and click on the enter button", function (val) {
    BulbapediaHomePage.searchFieldAfterFilled.type(val + "{enter}")

    cy.intercept('GET', 'https://bulbapedia.bulbagarden.net/w/index.php?title=Special%3ASearch&search=communities+and+events&go=Go', {
        statusCode: 200
    })
});

Given("The search results are displayed", function () {
    //contains the heading "Search results"
    SearchResultsPage.searchResultsHeading.should("be.visible")
});

Given("Different namespace options for filtering are shown", function () {
    cy.contains("Multimedia").should('exist')
    cy.contains("Everything").should('exist')
    cy.contains("Advanced").should('exist')
});

Given("The number of search results found for {string} are displayed", function (filter) {
    if (filter === "Main") {
        SearchResultsPage.searchResultsNumber.should("be.visible").should('have.text', "Results 1 - 20 of 155");
    }
});

Given("Click on the namespace checkbox {string} to filter results", function (namespace) {
    if (namespace === "Bulbapedia") {
        SearchResultsPage.namespaceBulbapedia.click()
    }
    else if (namespace === "Main") {
        SearchResultsPage.namespaceMain.click()
    }
    else if (namespace === "Shipping") {
        SearchResultsPage.namespaceShipping.click()
    } else if (namespace === "User talk") {
        SearchResultsPage.namespaceUserTalk.click()
    } else {//default is "Main"
        SearchResultsPage.namespaceMain.click()
    }
});

Given("Click on the namespace checkbox {string} to deselect this namespace", function (namespace) {
    //here we are assuming that the checkbox is already enabled. Hence clicking on it again will deselect the checkbox option
    switch (namespace) {
        case "something":
            // code block
            break;
        default:
            // "Main"
            SearchResultsPage.namespaceMain.click()
    }
});


Given("Perform search operation by clicking the {string} button", function (button) {
    if (button === "search") {
        SearchResultsPage.searchButton.click()
    }
});

Given("The search results are updated according to the new filter options", function () {
    SearchResultsPage.searchResultsNumber.should("be.visible").should('have.text', "Results 1 - 20 of 161");
});

Given("Click the search filter settings option {string}", function (filter) {
    switch (filter) {
        case "Multimedia":
            // code block
            break;
        case "Everything":
            // code block
            break;
        default:
            // Advanced
            cy.get('.search-types li').eq(3).click()
    }
});

Given("The number of results {int} are shown in the search results", function (number_of_results_expected) {
    let number_of_results_displayed_in_page = 20
    if (number_of_results_expected < 20) { number_of_results_displayed_in_page = number_of_results_expected }
    SearchResultsPage.searchResultsNumber.should("be.visible").should('have.text', `Results 1 - ${number_of_results_displayed_in_page} of ${number_of_results_expected}`);
});

Given("Click on the namespace checkbox {string} which has no filter results", function (namespace) {
    switch (namespace) {
        case "Help":
            SearchResultsPage.namespaceHelp.click()
            break;
        default:
            // "Category"
            SearchResultsPage.namespaceCategory.click()
    }
});

Given("Appropriate message is displayed informing that there were no results found", function () {
    cy.contains("There were no results matching the query").should('exist')
});


