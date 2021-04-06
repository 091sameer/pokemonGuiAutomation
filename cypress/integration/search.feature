Feature:Verify that searching the page and filtering the results work

    This feature tests the search functionality and its filtering options of the results
    We have used the scenario outline for testing the different filter options because it improves readabilty and also tests multiple options

    Background: Navigate to the main page where we perform the search
        Given Navigate to the main page


    #This scenario also tests that multiple combination of filters works
    Scenario: Verify that searching the page and filtering the results work - multiple combination of filters
        When Type "communities and events" in the search field and click on the enter button
        Then The search results are displayed
        When Click the search filter settings option "Advanced"
        Then Different namespace options for filtering are shown
        And The number of search results found for "Main" are displayed
        And Click the search filter settings option "Advanced"
        When Click on the namespace checkbox "Bulbapedia" to filter results
        And Perform search operation by clicking the "search" button
        Then The search results are updated according to the new filter options

    Scenario Outline:Testing that the search results according to the individual selected filter option works as expected
        When Type "communities and events" in the search field and click on the enter button
        And Click the search filter settings option "Advanced"
        And Click on the namespace checkbox "Main" to deselect this namespace
        And Click on the namespace checkbox "<namespace>" to filter results
        And Perform search operation by clicking the "search" button
        Then The number of results <number_of_results_expected> are shown in the search results

        Examples:
            | namespace  | number_of_results_expected |
            | Bulbapedia | 6                          |
            | Shipping   | 2                          |
            | User talk  | 199                        |

    Scenario Outline: Verify that searching for a filter with no results displays appropriate message
        When Type "communities and events" in the search field and click on the enter button
        And Click the search filter settings option "Advanced"
        And Click on the namespace checkbox "Main" to deselect this namespace
        And Click on the namespace checkbox "<namespace>" which has no filter results
        And Perform search operation by clicking the "search" button
        Then Appropriate message is displayed informing that there were no results found

        Examples:
            | namespace |
            | Help      |

#Some of the other test cases which could be added in future. These are marked with Tag "@wip"(work in progress) and will not be executed in the test run
#I have commented all the below scenarios as Cypress is having a bug that fails the run when we have skipped scenarios and also Background in the same feature

# @wip
# Scenario:Verify that searching with "None" as the namespace filter will always search for "Main" namespace

# @wip
# Scenario: Verify that searching with "All" as the namespace filter searches and displys the results for all the filters enabled

# @wip
# Scenario: The search results contain the all the information in the required template format

# @wip
# Scenario:The word searched is highlighted in the search result's heading

# @wip
# Scenario: The search result's heading contains information regarding the category and section of the namespace

# @wip
# Scenario: The search result contains a snippet of the content inside the page of the search result upto "predefined" characters

# @wip
# Scenario: The search result contains the information regarding the size, number of words and the date of edition of the searched webpage

# @wip
# Scenario: Number of search results displayed in one page