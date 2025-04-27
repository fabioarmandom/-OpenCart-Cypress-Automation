# OpenCart Cypress Automation

This project is a UI automation framework built with **Cypress** to test the shopping cart functionality of the OpenCart website (`http://opencart.abstracta.us/`). It follows the **Page Object Model (POM)** design pattern, includes screenshot capture, generates detailed reports, and integrates with a **GitLab CI** pipeline for continuous integration.

## Features
- Automates the following scenarios:
  - Search for "iPhone" and select the first product.
  - Add the iPhone to the cart.
  - Validate the iPhone is in the cart.
  - Remove the iPhone from the cart.
  - Validate the cart is empty.
- Uses **Cypress** with **Mocha** (test runner) and **Chai** (assertions).
- Implements **Page Object Model** for maintainable and reusable code.
- Captures screenshots at key steps for debugging and reporting.
- Generates HTML reports using `cypress-mochawesome-reporter`.
- Runs tests in a **GitLab CI** pipeline with artifacts (screenshots, reports).

## Prerequisites
- **Node.js** (v18 or higher): Install from [nodejs.org](https://nodejs.org/).
- **Git**: For version control and cloning the repository.
- A modern browser (e.g., Chrome, Firefox) for running tests.
- (Optional) **GitLab** account for CI pipeline execution.

