'use client';

import { useEffect } from 'react';
import { useCurrenciesStore } from './currencies.store';
import { currencies_actions } from './currencies.actions';
import { currencies_selectors } from './currencies.selectors';

const CurrenciesSelect = () => {
  //   const state = useCurrenciesStore();

  //   if (state.is === 'ok') {
  //     return <select></select>;
  //   }

  //   return null;

  const rates = currencies_selectors.getRates();

  return <select></select>;
};

const Currencies = () => {
  const state = useCurrenciesStore();

  useEffect(() => {
    currencies_actions.load();
  }, []);

  return (
    <div>
      {/* Zeby te plcaceholdery mialy stala wysokosc */}
      {(state.is === 'idle' || state.is === 'busy') && <div>Placeholder</div>}
      {state.is === 'fail' && (
        <div>
          {state.error} <button>Try again</button>
        </div>
      )}
      {state.is === 'ok' && (
        <div>
          <CurrenciesSelect />
        </div>
      )}
      {/* <CurrenciesSelect /> Wyjatek tak */}
    </div>
  );
};

export { Currencies };
