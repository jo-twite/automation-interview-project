Feature: Exercise 4

# The goal of the fourth exercise is to implement some e2e tests cases, using playwright and cucumber.
# Before starting this part make sure you red the README.md sections about e2e testing and test writing.
# For the test cases implementation, you can use the website https://www.saucedemo.com/.
# Note that you'll have to build your files for the modifications to be taken into account.
# To do it you can use the command "yarn build". You can also delete the build with the command "yarn clean:build".
# no need to start a build for those files. If you create files outside of this folder there will need to be compiled.

  Background:
    Given the website is loaded

# Task 8.a:  Implement the steps for this scenario to run.

# Task 8.b: Modify this test and the steps to be used for the login of both standard and locked out user (all credentials can be found o the website login page).
# Hint: Look for Scenario Outline in the cucumber documentation.
  Scenario: a valid user logs in
    When the user fills the username field with "standard_user"
    And the user fills the password field with "secret_sauce"
    And the user clicks the login button
    Then the user should be redirected to the home page

# Task 9: Implement a new test case in which:
# - The user logs in (should be a single prerequisite step)
# - Add an item to their cart
# - The remove from cart button is displayed

# Task 10: Implement a new test case to check all the buying behavior from the login of the user to the confirmation of the order.