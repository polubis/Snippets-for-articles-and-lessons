const INeedYourState = props => {
  console.log("Thanks for your state!", props)
  return null
}

const Component2 = props => {
  return <>{props.children}</>
}

const Component3 = props => {
  return <>{props.children}</>
}

const Component4 = props => {
  return <>{props.children}</>
}

const Component1 = () => {
  const [state, setState] = useState({ open: true })

  return (
    // Components composition decreased the coupling 💚!
    <Component2>
      <Component3>
        <Component4>
          <INeedYourState state={state} setState={setState} />
        </Component4>
      </Component3>
    </Component2>
  )
}
