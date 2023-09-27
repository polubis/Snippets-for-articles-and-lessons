describe("Reads API url when: ", () => {
  const API_URL = "https://localhost:3000";
  // The "afterEach" passed to "environmentFixture" will be called.
  const fixture = environmentFixture(afterEach)("NEXT_PUBLIC_API_URL");

  afterEach(() => {
    // This will be called too by "Jest".
    jest.spyOn(window.onabort).mockImplementation(jest.fn());
  })
})
