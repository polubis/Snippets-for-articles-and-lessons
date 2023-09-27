const fixtureCreator = environmentFixture(afterEach);
const fixture1 = fixtureCreator("NEXT_PUBLIC_API_URL");
const fixture2 = fixtureCreator("OTHER_ENV_VARIABLE");
const fixture3 = fixtureCreator("USER_STUFF");
