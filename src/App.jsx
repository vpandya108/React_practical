import { useState } from 'react'
import './styles.css'

function App() {
  alert(sum(5,6));
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
function sum(a,b)
{
  return a+b
}
export default App