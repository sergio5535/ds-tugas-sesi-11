@login
Feature: Login Test

  Background:
    Given user is on login page

  @positive @tc-1 @regression @smoketest
  Scenario Outline: Success Login
    When user login using "<username>" as username and "<password>" as password
    Then user should be redirected to home page

    Examples:
      | username      | password     |
      | standard_user | secret_sauce |
      | visual_user   | secret_sauce |

  @negative @tc-2
  Scenario Outline: Login with Wrong Password
    When user login using "<username>" as username and "<password>" as password
    Then user should see error message "Epic sadface: Username and password do not match any user in this service"

    Examples:
      | username      | password       |
      | standard_user | wrong_password |
      | standard_user | password123    |
