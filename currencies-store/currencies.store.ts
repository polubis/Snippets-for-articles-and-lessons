import { create } from 'zustand';
import { CurrencyStore } from './currencies.defs';

const useCurrenciesStore = create<CurrencyStore.State>((set) => ({
  is: 'idle',
}));

export { useCurrenciesStore };
