import { CurrencyStore } from './currencies.defs';
import { useCurrenciesStore } from './currencies.store';

const currencies_selectors: CurrencyStore.Selectors = {
  getRates: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    return useCurrenciesStore((state) => {
      if (state.is === 'ok') return state.rates;

      throw Error('Stop reading values if they are not ok');
    });
  },
};

export { currencies_selectors };
