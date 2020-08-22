import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content name1={part1} name2={part2} name3={part3} exercise1={exercises1} exercise2={exercises2} exercise3={exercises3} />
      <Total exercise1={exercises1} exercise2={exercises2} exercise3={exercises3} />
    </div>
  )
}

const Header = (props) => {
  return (
    <div>
    <h1>{props.course}</h1>
    </div>
  )
}
const Content = (props) => {
  return (
    <div>
    <p>{props.name1} {props.exercise1}</p>
    <p>{props.name2} {props.exercise2}</p>
    <p>{props.name3} {props.exercise3}</p>
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>
        Number of exercises {props.exercise1 + props.exercise2 + props.exercise3}
      </p>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))