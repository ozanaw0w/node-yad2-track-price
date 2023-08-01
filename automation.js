const { By, Key, Builder, until } = require("selenium-webdriver");
require("chromedriver")
const driver = new Builder().forBrowser('chrome').build();


class Automation {
    async getPrice(url) {
        await driver.get(url);
        const priceElement = await driver.findElement(By.className('price'));
        const price = await priceElement.getText();
        return price.substring(0, price.indexOf(' ')).split('').map((c) => Number(c)).filter((c) => !isNaN(c)).join('');
    }
}

module.exports = Automation