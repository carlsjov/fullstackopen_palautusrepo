import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const App = (props) => {
  const [ counter, setCounter] = useState(0)
  
  const increaseByOne = () => setCounter(counter +1)
  const setToZero = () => setCounter(0)
  const decreaseByOne = () => setCounter(counter -1)

  return (
    <div>
      <Display counter={counter} />
      <Button handleClick={increaseByOne} text='plus' />
      <Button handleClick={decreaseByOne} text='minus' />
      <Button handleClick={setToZero} text='zero' />
    </div>
    
  )
}

const Display = ({counter}) => (<div>{counter}</div>)

const Button = ({handleClick,text}) => {
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

ReactDOM.render(
<App />, 
document.getElementById('root'))
