// The fixture pattern that we implemented.
const environmentFixture = (key: string) => {
  const initial = process.env[key];

  return {
    mock: (value: string) => {
      process.env[key] = value;
    },
    restore: () => {
      process.env[key] = initial;
    },
    delete: () => {
      delete process.env[key];
    },
  };
};

describe('Reads API url when: ', () => {
  const API_URL = 'https://localhost:3000';
  const fixture = environmentFixture('NEXT_PUBLIC_API_URL');

  afterEach(() => {
    // 💢 Here is the real risk and problem!

    // If the developer forgets to add this afterEach statement,
    // the next tests may have mocked env variables from
    // other tests...
    fixture.restore();
  });

  it('throws exception if lack of env variable', () => {
    fixture.delete();
    expect(() => getUrl()).toThrow();
  });

  it('returns readed url', () => {
    fixture.mock(API_URL);
    expect(getUrl()).toBe(API_URL);
  });
});
