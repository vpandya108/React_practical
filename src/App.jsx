import { useState } from 'react'
import './styles.css'
import Login,{Profile,Setting, userkey}  from './second';

function App() {
  //alert(sum(5,6));
  const name ="vishva pandya";
  let x=50;
  let y=40;
  let myvariable="vishva";
  function hello()
  {
    return "greeting"
  }
  return (
    <div>
      <div>{myvariable}</div>
      <h1>Hello, react!{sum(10,30)}</h1>
      <h1>{name}</h1>
      <h1>{x*y}</h1>
      {hello()}
      <h5>learning react</h5>
      <button onClick={()=>alert("helloo")}>click me!</button>
      <br></br>
      <h1>{userkey}</h1>
      <p>my paragraph</p>
      <Color />

      <Paint />
      <Login />
      <Profile />
      <Setting/>
    </div>
  )
}
//component function
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
//normal function
function sum(a,b)
{
  return a+b
}

export default App