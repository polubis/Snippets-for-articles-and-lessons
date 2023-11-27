import io.cucumber.java.en.Given;
import io.cucumber.java.en.When;
import io.cucumber.java.en.Then;

public class LoginSteps {

    @Given("the user is on the login page")
    public void givenUserIsOnLoginPage() {
        // Code to navigate to the login page
    }

    @When("the user enters valid credentials")
    public void whenUserEntersValidCredentials() {
        // Code to input valid login credentials
    }

    @Then("the user should be logged in successfully")
    public void thenUserShouldBeLoggedInSuccessfully() {
        // Code to verify successful login
    }
}
