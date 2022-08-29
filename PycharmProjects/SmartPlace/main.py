import  selenium
from selenium import  webdriver
from selenium.webdriver.common.by import  By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.chrome.service import Service
from time import sleep

PATH = "C:\Program Files (x86)\chromedriver.exe"
options = Options()

PROXY = "proxy.soax.com:10002"
options = webdriver.ChromeOptions()
options.add_argument('proxy.soax.com'.format(PROXY))
driver = webdriver.Chrome(service=Service(PATH), options=options)

driver.get("https://www.amazon.in/")

product_name = driver.find_element(By.XPATH, "//input[@id='twotabsearchtextbox']")
product_name.send_keys("airpods")

submit_btn = driver.find_element(By.XPATH, "//input[@id='nav-search-submit-button']")
submit_btn.click()
sleep(3)


products = driver.find_element(By.XPATH, "//*[@id='search']/div[1]/div[1]/div/span[3]/div[2]/div[7]/div/div/div/div/div/div[2]/div/div/div[1]/h2/a/span")
word = products.get_attribute('innerText')
print(word)
