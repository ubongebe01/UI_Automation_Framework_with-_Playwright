const { test, expect } = require('@playwright/test');
const { LoginPage } = require('./pages/LoginPage');
const { HomePage } = require('./pages/HomePage');
const { CartPage } = require('./pages/CartPage');
const { CheckoutPage } = require('./pages/CheckoutPage');
const data = require('./utils/testData');

test.describe('SauceDemo Automation Flow', () => {

    test('Invalid login should show error message', async ({ page }) => {
        const login = new LoginPage(page);
        await login.goto();
        await login.login(data.invalidUser.username, data.invalidUser.password);
        const error = await login.getErrorMessage();
        expect(error).toContain('Username and password do not match');
    });

    test('Login, add to cart, remove item, and checkout', async ({ page }) => {
        const login = new LoginPage(page);
        const home = new HomePage(page);
        const cart = new CartPage(page);
        const checkout = new CheckoutPage(page);

        // Login
        await login.goto();
        await login.login(data.validUser.username, data.validUser.password);

        // Add and remove items
        await home.addToCart(0);
        await home.addToCart(1);
        await home.openCart();
        expect(await cart.getItemCount()).toBe(2);

        // Remove one item and continue
        await page.goBack();
        await home.removeFromCart(0);
        await home.openCart();
        expect(await cart.getItemCount()).toBe(1);

        // Checkout flow
        await cart.proceedToCheckout();
        await checkout.fillInfo(data.checkoutInfo.firstName, data.checkoutInfo.lastName, data.checkoutInfo.zip);
        await checkout.finish();

        // Final assertion (e.g., thank you message)
        await expect(page.locator('.complete-header')).toHaveText('Thank you for your order!');
    });
});