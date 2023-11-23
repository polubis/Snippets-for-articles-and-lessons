const value = useMemo(
  () => ({
    ...state,
    signIn: () => {
      // ⚠ Not bad, but it still have a problems.
      import("some-huge-library").then(({ signIn }) => {})
    },
  }),
  [state]
)
