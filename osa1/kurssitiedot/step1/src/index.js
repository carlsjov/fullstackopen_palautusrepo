import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]


  return (
    <div>
      <Header course={course} />
      <Content name1={parts[0].name} name2={parts[1].name} name3={parts[2].name} exercise1={parts[0].exercises} exercise2={parts[1].exercises} exercise3={parts[2].exercises} />
      <Total exercise1={parts[0].exercises} exercise2={parts[1].exercises} exercise3={parts[2].exercises} />
    </div>
  )
}

const Header = (props) => {
  console.log(props)
  return (
    <div>
    <h1>{props.course}</h1>
    </div>
  )
}
const Content = (props) => {
  console.log(props)
  return (
    <div>
    <Part name ={props.name1} exercise={props.exercise1} />
    <Part name ={props.name2} exercise={props.exercise2} />
    <Part name ={props.name3} exercise={props.exercise3} />
    </div>
  )
}

const Total = (props) => {
  console.log(props)
  return (
    <div>
      <p>
        Number of exercises {props.exercise1 + props.exercise2 + props.exercise3}
      </p>
    </div>
  )
}

const Part = (props) => {
  console.log(props)
  return (
    <p>{props.name} {props.exercise}</p>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))