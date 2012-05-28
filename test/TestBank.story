//import com.thunderhead.selenium.ExtendedSelenium;
import com.thoughtworks.selenium.DefaultSelenium;

before "start selenium", {
  given "selenium is up and running", {
    String dir = "t:/workspace/sandbox/bank/test";
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

    //wait for a drop down list of options to be visible
    String expr = /var value = selenium.isElementPresent("/ +"//" +/div[contains(@class, 'x-boundlist-list-ct')]"); value == true;/;
    selenium.waitForCondition(expr, "60000");

    //click the required drop down item based on the text of the target item
    selenium.click("//div[contains(@class, 'x-boundlist-list-ct')]/descendant::ul/li[contains(@class, 'x-boundlist-item')][text()='SBSA']");

    //wait for the drop down list of options to be no longer visible
    //String expr = /var value = selenium.isElementPresent("/ +"//" +/div[contains(@class, 'x-boundlist-list-ct')]"); value == false;/;
    //selenium.waitForCondition("var value = selenium.isElementPresent('//div[contains(@class, 'x-combo-list') and contains(@style, 'visibility: visible')]'); value == false", "60000");

    //selenium.ext4().clickComboBoxListItem("cbBanks", "SBSA");
 }
 //then "Some value2 should be selected", {
   //selenium.getSelectedLabel("combo").shouldBeEqual "some value2"
 //}

 
}

public void select() {
    //click the down arrow image on the right of the ComboBox and assumes that there is a label before the component
    selenium.click("//label[text()='Bank:']/../following-sibling::*//div[contains(@class, 'x-form-arrow-trigger')]");

    //wait for a drop down list of options to be visible
    String expr = /var value = selenium.isElementPresent("/ +"//" +/div[contains(@class, 'x-boundlist-list-ct')]"); value == true;/;
    selenium.waitForCondition(expr, "60000");

    //click the required drop down item based on the text of the target item
    selenium.click("//div[contains(@class, 'x-boundlist-list-ct')]/descendant::ul/li[contains(@class, 'x-boundlist-item')][text()='SBSA']");

    //wait for the drop down list of options to be no longer visible
    //String expr = /var value = selenium.isElementPresent("/ +"//" +/div[contains(@class, 'x-boundlist-list-ct')]"); value == false;/;
    //selenium.waitForCondition("var value = selenium.isElementPresent('//div[contains(@class, 'x-combo-list') and contains(@style, 'visibility: visible')]'); value == false", "60000");

    //selenium.ext4().clickComboBoxListItem("cbBanks", "SBSA");

}


after "stop selenium" , {
  then "selenium should be shutdown", {
    //selenium.stop()
  }
}
