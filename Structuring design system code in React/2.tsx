const theme = createTheme({
  status: {
    danger: orange[500],
  },
})

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CustomCheckbox defaultChecked />
    </ThemeProvider>
  )
}
