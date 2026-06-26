import { simulation, atOnceUsers, global, scenario, getParameter } from "@gatling.io/core";
import { http, status } from "@gatling.io/http";
import { constantUsersPerSec, nothingFor, rampUsers, rampUsersPerSec, stressPeakUsers } from "@gatling.io/core"; //"../target/bundle";

export default simulation((setUp) => {
  // Define HTTP configuration

  const httpProtocol = http.baseUrl("https://api.clickup.com").acceptHeader("application/json");

  // Define scenario

  const scenarioForClickUp = scenario("Scenario for ClickUp").exec(
    http("Home")
      .get("/api/v2/user")
      .header("Authorization", "pk_302428217_Q0SH3L1KRFHUY6Z5W0FON35SHCRQ3TOH")
      .check(status().is(200))
  );

  // Define injection profile and execute the test

  // Report 1 - Навантаження 10 users/sec протягом 20 sec, потім пікове навантаження 100 users/sec на 5 sec і ще 10 users/sec протягом 20 sec
  // setUp(
  //   scenarioForClickUp
  //     .injectOpen(
  //       constantUsersPerSec(10).during(20),
  //       stressPeakUsers(100).during(5),
  //       constantUsersPerSec(10).during(20)
  //     )
  //     .protocols(httpProtocol)
  // );

  // Report 2 - Навантаження 20 users/sec протягом 20 sec, потім ramp up навантаження 100 users/sec на 30 sec
  setUp(
    scenarioForClickUp
      .injectOpen(constantUsersPerSec(20).during(20), rampUsers(100).during(30))
      .protocols(httpProtocol)
  );
});