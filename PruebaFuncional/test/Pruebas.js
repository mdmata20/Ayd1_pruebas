require('chromedriver');
const { Builder, By, Key, until } = require('selenium-webdriver');
var webdriver = require('selenium-webdriver');
var assert = require("chai").assert;


describe('pruebaEstudiante', function() {
    this.timeout(30000)
    let driver
    let vars
    beforeEach(async function() {
        driver = await new Builder().withCapabilities(webdriver.Capabilities.chrome()).build() 
    })
    afterEach(async function() {
      await driver.quit();
    })
    it('pruebaEstudiante', async function() {
      await driver.get("http://localhost:4200/Login")
      await driver.manage().window().setRect({ width: 1242, height: 978 })
      await driver.findElement(By.id("exampleFormControlInput1")).click()
      await driver.findElement(By.id("exampleFormControlInput1")).sendKeys("matalejandro@gmail.com")
      await driver.findElement(By.xpath("(//input[@id=\'exampleFormControlInput1\'])[2]")).click()
      await driver.findElement(By.xpath("(//input[@id=\'exampleFormControlInput1\'])[2]")).sendKeys("manuel5470")
      await driver.findElement(By.xpath("//button[@type=\'button\']")).click()
    })
  })

