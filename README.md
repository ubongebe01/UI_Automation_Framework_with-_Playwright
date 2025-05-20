# UI_Automation_Framework_with-_Playwright

This project automates UI testing for [https://www.saucedemo.com](https://www.saucedemo.com) using [Playwright](https://playwright.dev/) with JavaScript in a **Page Object Model (POM)** structure.

##  Test Scenarios Covered

###  Login Tests
- Attempt login using invalid credentials (negative test cases)

###  Logout Functionality
- Login and logout from the application

### 🛒 Cart Interaction
- Add products to cart
- Remove products from cart

### Checkout Process
- Proceed to checkout
- Simulate removal of items during checkout

## Project Structure
├── tests/
│ ├── pages/ # Page Object Models
│ │ ├── LoginPage.js
│ │ ├── HomePage.js
│ │ ├── CartPage.js
│ │ └── CheckoutPage.js
│ │
│ ├── utils/ # Test data & utilities
│ │ └── testData.js
│ │
│ └── saucedemo.spec.js # Main test suite
│
├── .github/workflows/ # GitHub Actions CI (optional)
│ └── playwright.yml
│
├── playwright.config.js # Playwright configuration
├── package.json

## Setup Instructions
1. Clone the repo using: ```bash
git clone https://github.com/ubongebe01/UI_Automation_Framework_with-_Playwright.git
cd saucedemo-ui-playwright
2. Install dependencies using: npm install
3. Install Playwright browsers using: npx playwright install
4. Run test using: npx playwright test tests/saucedemo.spec.js
5. To view test result type: npx playwright show-report

## Playwright Config Highlights
a) Base URL: https://www.saucedemo.com
b) Headless mode: enabled by default
c) Video/Screenshot: captured on failure
d) Edit playwright.config.js to change behavior.






