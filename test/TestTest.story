import com.thoughtworks.selenium.DefaultSelenium;

before "start selenium", {
  given "selenium is up and running", {
    selenium = new DefaultSelenium("localhost",
    8888, "*googlechrome", "http://localhost:8080/")
    selenium.start()
    selenium.setSpeed("5000")
  }
}


scenario "Bank selection", {

  when "Open bank page", {
    selenium.open("http://localhost:8080/bank/test.html")
    selenium.select("combo", "some value2")

  }
  then "Some value2 should be selected", {
    selenium.getSelectedLabel("combo").shouldBeEqual "some value2"
  }
 
}

after "stop selenium" , {
  then "selenium should be shutdown", {
   selenium.stop()
  }
}
