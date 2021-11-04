@fullsuite
Feature: This Feature verifies the basic functionalities of online shopping portal

  Background:
    Given I am on the home page

  # @SignUpSignIn
  # Scenario: As a user, I can sign up on the portal
  #   When I navigate to singin page
  #   Then I create an account with random data
  #   Then I shall verify the first and last name on the landing page
  #   Then I signout from portal

  # @test
  # Scenario: As a user, I can logout and login to the portal
  #   When I navigate to singin page
  #   Then I create an account with random data
  #   Then I signout from portal
  #   Then I am on signIn page
  #   Then I shall login to the portal using the account created
  #   Then I signout from portal

  Scenario: As a user, I can login, add a product to the shopping cart and verify the cart
    When I navigate to singin page
    Then I create an account with random data
    Then I shall add a product to the shopping cart
    Then navigate to the payments page
    Then verify product displayed in the cart is same as the product added earlier

