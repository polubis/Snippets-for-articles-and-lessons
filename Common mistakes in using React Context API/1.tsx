const INeedYourState = props => {
  console.log("Thanks for your state!", props)
  return null
}

const Component4 = props => {
  return <INeedYourState {...props} />
}

const Component3 = props => {
  return <Component4 {...props} />
}

const Component2 = props => {
  return <Component3 {...props} />
}

const Component1 = () => {
  const [state, setState] = useState({ open: true })

  return <Component2 state={state} setState={setState} />
}
