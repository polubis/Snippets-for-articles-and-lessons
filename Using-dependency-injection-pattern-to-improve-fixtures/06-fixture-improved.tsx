type AfterEachFn = (cb: () => void) => void;

// The fixture pattern with dependency injection.
const environmentFixture = (afterEach: AfterEachFn) => (key: string) => {
  const initial = process.env[key];

  const mock = (value: string): void => {
    process.env[key] = value;
  };

  const restore = (): void => {
    process.env[key] = initial;
  };

  const remove = (): void => {
    delete process.env[key];
  };

  afterEach(restore);

  return {
    mock,
    restore,
    // We used remove - because "delete" keyword
    // is reserved in JS.
    delete: remove,
  };
};

describe('Reads API url when: ', () => {
  const API_URL = 'https://localhost:3000';
  const fixture = environmentFixture(afterEach)('NEXT_PUBLIC_API_URL');

  // It may be removed!
  afterEach(() => {
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
