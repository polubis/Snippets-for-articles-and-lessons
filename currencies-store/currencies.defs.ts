// eslint-disable-next-line @typescript-eslint/no-namespace
namespace CurrencyStore {
  export type Idle = { is: 'idle' };
  export type Busy = { is: 'busy' };
  export type Ok = { is: 'ok'; base: string; rates: { currencyCode: number } };
  export type Fail = { is: 'fail'; error: string };

  export interface Rates {
    currencyCode: number;
  }

  export type State = Idle | Busy | Ok | Fail;

  export interface Actions {
    load(): Promise<void>;
    reset(): void;
  }

  export interface Selectors {
    getRates(): Rates;
  }
}

export type { CurrencyStore };
