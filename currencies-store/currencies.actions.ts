import { getArticle } from '@system/blog-api';
import { useCurrenciesStore } from './currencies.store';
import { CurrencyStore } from './currencies.defs';

const { setState, getState } = useCurrenciesStore;

const set = (payload: CurrencyStore.State): void => {
  setState(payload, true);
};

export const getExchangeRates = async (): Promise<CurrencyStore.Rates> => {
  const data = await fetch(
    `http://api.exchangeratesapi.io/latest?access_key=${process.env.EXCHANGE_API_KEY}`
  );

  const rates = await data.json();

  return rates;
};

const currencies_actions: CurrencyStore.Actions = {
  load: async () => {
    if (getState().is === 'ok') return;

    // Merge // Repllace
    // set({ is: 'busy' }); -> domyslnie merge, tryb merge
    // set({ is: 'cos' }, true) -> tryb replace
    set({ is: 'busy' });

    try {
      const rates = await getExchangeRates();

      set({ is: 'ok', rates, base: 'USD' });
    } catch (error: unknown) {
      if (error instanceof Error) {
        set({ is: 'fail', error: error.message });
        return;
      }

      set({ is: 'fail', error: 'Something went wrong...' });
    }
  },
  reset: () => {
    set({ is: 'idle' });
  },
};

export { currencies_actions };
