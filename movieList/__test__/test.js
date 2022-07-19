const { Builder, Capabilities, By } = require("selenium-webdriver");
require("chromedriver");
const driver = new Builder().withCapabilities(Capabilities.chrome()).build();
beforeAll(async () => {
  await driver.get(" http://127.0.0.1:5500/movieList/index.html");
});
afterAll(async () => {
  await driver.quit();
});
test("This is to test 3 funtions(delete, delete message, watch).", async () => {
  let inputField = await driver.findElement(By.xpath("//input"));
  await inputField.sendKeys("ice\n");
  await driver.sleep(2000);

  let span = await driver.findElement(By.css("span"));
  await span.click();
  let message = await driver.findElement(By.css("#message")).getText();
  expect(message).toContain("ice watched");
  await driver.sleep(2000);

  let button = await driver.findElement(By.css("#ice"));
  await button.click();

  expect(message).toContain("ice deleted");
  await driver.sleep(2000);
});
