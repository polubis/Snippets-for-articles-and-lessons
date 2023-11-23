const value = useMemo(
  () => ({
    ...state,
    load: () => {
      // ⚠ Not bad, but it still has problems.
      import("some-huge-library").then(({ someFunction }) => {})
    },
  }),
  [state]
)
