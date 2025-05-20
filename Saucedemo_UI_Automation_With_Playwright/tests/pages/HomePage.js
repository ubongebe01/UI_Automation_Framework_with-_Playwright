exports.HomePage = class HomePage {
    constructor(page) {
        this.page = page;
        this.menuBtn = page.locator('#react-burger-menu-btn');
        this.logoutBtn = page.locator('#logout_sidebar_link');
        this.cartIcon = page.locator('.shopping_cart_link');
        this.addToCartBtns = page.locator('[data-test^="add-to-cart"]');
        this.removeBtns = page.locator('[data-test^="remove"]');
    }

    async logout() {
        await this.menuBtn.click();
        await this.logoutBtn.click();
    }

    async addToCart(index = 0) {
        await this.addToCartBtns.nth(index).click();
    }

    async removeFromCart(index = 0) {
        await this.removeBtns.nth(index).click();
    }

    async openCart() {
        await this.cartIcon.click();
    }
};
