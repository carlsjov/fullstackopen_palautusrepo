import React from 'react';
import ReactDOM from 'react-dom';
const Hello = (props) => {
  return (
    <>
      <p>
        Hello {props.name}, you are {props.age} years old
      </p>
    </>
  )
}

const Footer = () => {
  return (
    <>
      greeting app created by 
      <a href="https://github.com/carlsjov">carlsjov</a>
    </>
  )
}

const App = () => {
  const nimi = 'Pekka'
  const ika = 10
  return (
    <>
      <h1>Greetings</h1>
      <Hello name="Maya" age={26+ika}/>
      <Hello name={nimi} age ={ika}/>
      <Footer />
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))