import { useState } from 'react'
import './styles.css'

function App() {
  let myvariable="vishva";
  return (
    <div>
      <div>{myvariable}</div>
      <h1>Hello, react!</h1>
      <h5>learning react</h5>
      <button>click me!</button>
      <p>my paragraph</p>
      <Color />
      <Paint />
    </div>
  )
}
function Color()
{
  return(
    <h1>red Color</h1>
  )
}
function Paint()
{
  return(
    <div>
      <h6>react practical of componet</h6>
    </div>
  )
}
export default App