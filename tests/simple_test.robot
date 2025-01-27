*** Settings ***
Library    SeleniumLibrary

*** Variables ***
${BASE_URL}    http://localhost:3000
${BROWSER}     chrome
${HEADLESS}    false
${DELAY}       0.5 seconds

*** Test Cases ***
Verify Home Page
    [Documentation]    Opens the home page and checks if FrameCove is displayed.
    Open Browser    ${BASE_URL}    ${BROWSER}
    Set Selenium Speed    ${DELAY}
    Wait Until Page Contains    Home  # Replace with text visible on your homepage
    Close Browser
