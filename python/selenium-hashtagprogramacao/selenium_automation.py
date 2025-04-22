from selenium import webdriver
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import time

browser = webdriver.Chrome()

waitMax15 = WebDriverWait(browser, 15)

browser.get("https://www.hashtagtreinamentos.com/")
browser.maximize_window()



# Select a specific element (tab 1, because will open in a new tab)
browser.find_element('class name', 'botao-verde').click()

# Select many elements (tab 0, because will open in the same tab)
menuItems = browser.find_elements('class name', 'header__titulo')
for item in menuItems:
  if "Para Empresas" in item.text:
    item.click()
    break

# List of tabs
tabs = browser.window_handles
browser.switch_to.window(tabs[1]) # select the new tab

browser.get("https://www.hashtagtreinamentos.com/curso-python") # Open a link in the new tab

# Fill in the information in the text box
browser.find_element('id', 'firstname').send_keys("Some beautiful name")
browser.find_element('id', 'email').send_keys("myemail@gmail.com")
browser.find_element('id', 'phone').send_keys("11555554444")

menuItems = browser.find_elements('class name', 'botao-verde')
for item in menuItems:
  if "Veja mais depoimentos" in item.text.strip():
    browser.execute_script("arguments[0].scrollIntoView({block: 'center'})", item) # vertically centralize item in the screen
    waitMax15.until(EC.element_to_be_clickable(item)) # wait up to 15 seconds until the item is visible and clickable
    browser.execute_script("arguments[0].click()", item) # click in the item using js
    break

time.sleep(20)