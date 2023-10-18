if (state.is === 'undetected') {
  state.height; // ❌ TypeScript error.
}

if (state.is === 'detected') {
  state.height; // ✅ TypeScript is ok with this.
}
