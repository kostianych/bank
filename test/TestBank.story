import com.thoughtworks.selenium.DefaultSelenium;

before "start selenium", {
  given "selenium is up and running", {
    selenium = new DefaultSelenium("localhost",
    8888, "*googlechrome", "http://localhost:8080/")
    selenium.start()
    selenium.setSpeed("2000")
  }
}


scenario "Bank selection", {

  when "Open bank page", {
    //selenium.open("http://localhost:8080/mvc/bank")
    selenium.open("http://localhost:8080/bank")
  }
  then "Banking details page should be loaded", {
    selenium.getTitle().shouldBeEqual "Banking details"  
  }

  when "Select branch 2", {    
    //click the down arrow image on the right of the ComboBox and assumes that there is a label before the component
    selenium.click("//label[text()='Bank:']/../following-sibling::*//div[contains(@class, 'x-form-arrow-trigger')]");
    //selenium.click("//label[text()='Bank:']");

    //wait for a drop down list of options to be visible
    //boolean value = selenium.isElementPresent("//div[contains(@class, 'x-boundlist-list-ct')]");
    //System.out.println(value);
    //selenium.isElementPresent('//div[contains(@class, 'x-boundlist-list-ct')]')
    selenium.waitForCondition("var value = true; value == true", "60000");

    //click the required drop down item based on the text of the target item
    //selenium.click("//div[contains(@class, 'x-combo-list')]/descendant::div[contains(@class, 'x-combo-list-item')][text()='SBSA']");

    //wait for the drop down list of options to be no longer visible
    //selenium.waitForCondition("var value = selenium.isElementPresent('//div[contains(@class, 'x-combo-list') and contains(@style, 'visibility: visible')]'); value == false", "60000");

    //selenium.select("cbBanks", "SBSA")
 }
 //then "Some value2 should be selected", {
   //selenium.getSelectedLabel("combo").shouldBeEqual "some value2"
 //}

 
}


after "stop selenium" , {
  then "selenium should be shutdown", {
   selenium.stop()
  }
}
