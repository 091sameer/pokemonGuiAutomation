import {
    Before,
    After,
    Given,
    Then,
    When,
} from "cypress-cucumber-preprocessor/steps";

const website_link = 'https://bulbapedia.bulbagarden.net/wiki/List_of_Pok%C3%A9mon_by_name'

const yPokemonNamePage = require('../../pages/yPokemonName.page.js');
const YPokemonNamePage = new yPokemonNamePage();
const bulbapediaHomePage = require('../../pages/bulbapediaHome.page.js');
const BulbapediaHomePage = new bulbapediaHomePage();

Given("Navigate to the website which lists the names of Pokemon with index of letter {string}", function (letter) {
    const indexed_website_link = website_link + "#" + letter
    cy.visit(indexed_website_link);
});

Then("All the pokemon starting their name with letter {string} are present in the List of names", function (letter) {
    switch (letter) {
        case "Y":
            cy.contains("Yamask").should('exist')
            cy.contains("Yamper").should('exist')
            cy.contains("Yanma").should('exist')
            cy.contains("Yanmega").should('exist')
            cy.contains("Yungoos").should('exist')
            cy.contains("Yveltal").should('exist')
            break;
        default:
            throw new Error("Unknown letter error. Please have a look!!")
    }
});

Given("Accept cookies", function () {
    //this delay is used because sometimes the tests are failing due to the cookies button not being visible early
    cy.wait(1000)
    BulbapediaHomePage.acceptCookies.click();
});
