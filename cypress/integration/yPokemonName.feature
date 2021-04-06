Feature:Verify that API of the Pokemon website delivers the proper results

    Scenario Outline: Verify that all Pokémon starting their name with “Y” are present in the List of names
        When Navigate to the website which lists the names of Pokemon with index of letter "<letter>"
        And Accept cookies
        Then All the pokemon starting their name with letter "<letter>" are present in the List of names

        Examples:
            | letter |
            | Y      |
