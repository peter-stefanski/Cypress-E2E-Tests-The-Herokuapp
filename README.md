# Cypress E2E Tests – The Herokuapp

## Description
This repository contains end-to-end tests written in **Cypress** for The Internet demo application.  
The tests cover, among others:
- login flows and authentication,
- form submissions and validations,
- file uploads,
- handling alerts and popups,
- dynamic content loading and waiting for elements,
- API requests interception for login or form submissions.

Demo site: [The Internet (Herokuapp)](https://the-internet.herokuapp.com)

---

## Requirements
- [Node.js](https://nodejs.org/) (>= 16)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

---

## Installation
Clone the repository and install dependencies:


git clone https://github.com/peter-stefanski/Cypress-E2E-Tests-The-Herokuapp.git
cd Project_03
npm install

# Running Cypress Tests

## Open Cypress Test Runner (Interactive Mode)

npx cypress open

## Run Cypress in Headless Mode (CLI)
npx cypress run

## Base URL

- Make sure your TodoMVC React app is running locally.

- Default URL used in tests:

https://the-internet.herokuapp.com

- You can change this in cypress.config.js if needed.

## Notes

- Ensure the app is accessible before executing tests.

- Use data-testid or other reliable selectors in your tests.

- Test data can be adjusted in Cypress fixtures.

- Use cy.wait() and .should("not.exist") for handling dynamic content.

- Use cy.intercept() to capture or mock API requests (e.g., login flows).

- Screenshots and videos can be generated for failed tests for easier debugging.
