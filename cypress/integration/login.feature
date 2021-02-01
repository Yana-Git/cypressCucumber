Feature: login functionality

    As a user I can login the system successfully

    Scenario: a user can login successfully with correct credential
        Given I am at login page
        When I input username "standard_user" and password "secret_sauce"
        And Click the submit button
        Then I should be able to load main page successfully

    Scenario: a user cannot login successfully without username
        Given I am at login page
        When I input username " " and password " "
        And Click the submit button
        Then I should not be able to load main page successfully

    Scenario: a locked user cannot login successfully with correct credential
        Given I am at login page
        When I input username "locked_out_user" and password "secret_sauce"
        And Click the submit button
        Then I should not be able to load main page successfully

