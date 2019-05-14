React State and Lifecycle
Agenda
Component State
Component Lifecycle
componentDidMount
componentWillUnmount
componentDidUpdate
Resources
State an Lifecycle
Lifecycle Diagram
Component State
Components can define state inside of the class body. State can be accessed using this.state

import React, { PureComponent } from 'react'

export default class Dog extends PureComponent {
  state = {
    name: 'spot',
    weight: '20 lbs',
    age: 5
  }

  render() {
    return (
      <dl>
        <dt>Name</dt>
        <dd>{this.state.name}</dd>

        <dt>Age</dt>
        <dd>{this.state.age}</dd>

        <dt>Weight</dt>
        <dd>{this.state.weight}</dd>
      </dl>
    )
  }
}
Unlike properties state can be updated using this.setState

import React, { PureComponent } from 'react'

export default class Dog extends PureComponent {
  state = {
    name: 'spot',
    weight: '20 lbs',
    age: 5
  }

  handleClick = () => {
    this.setState({ age: 6 });
  }

  render() {
    return (
      <>
        <button onClick={this.handleClick}>Update Age</button>
        <dl>
          <dt>Name</dt>
          <dd>{this.state.name}</dd>

          <dt>Age</dt>
          <dd>{this.state.age}</dd>

          <dt>Weight</dt>
          <dd>{this.state.weight}</dd>
        </dl>
      </>
    )
  }
}
If your state change relies on existing state you should provide a function to this.setState

import React, { PureComponent } from 'react'

export default class Dog extends PureComponent {
  state = {
    name: 'spot',
    weight: '20 lbs',
    age: 5
  }

  handleClick = () => {
    this.setState(state => {
      return {
        age: state.age + 1
      }
    });
  }

  render() {
    return (
      <>
        <button onClick={this.handleClick}>Update Age</button>
        <dl>
          <dt>Name</dt>
          <dd>{this.state.name}</dd>

          <dt>Age</dt>
          <dd>{this.state.age}</dd>

          <dt>Weight</dt>
          <dd>{this.state.weight}</dd>
        </dl>
      </>
    )
  }
}
Component Lifecycle
Components have a life. They come into existence (mount), get updated, and get destroyed (unmount). You can hook into these lifecycle events by defining instance methods on your component class.

Method	Description
componentDidMount	The component has rendered to the DOM
componentWillUnmount	The component has been removed from the DOM
componentDidUpdate	The components state or props have changed
import React, { PureComponent } from 'react'

export default class Dog extends PureComponent {
  state = {
    name: 'spot',
    weight: '20 lbs',
    age: 5
  }

  componentDidMount() {
    console.log('Mounted');
  }

  componentDidUpdate() {
    console.log('Updated');
  }

  componentWillUnmount() {
    console.log('Unmounted');
  }

  handleClick = () => {
    this.setState(state => {
      return {
        age: state.age + 1
      }
    });
  }

  render() {
    return (
      <>
        <button onClick={this.handleClick}>Update Age</button>
        <dl>
          <dt>Name</dt>
          <dd>{this.state.name}</dd>

          <dt>Age</dt>
          <dd>{this.state.age}</dd>

          <dt>Weight</dt>
          <dd>{this.state.weight}</dd>
        </dl>
      </>
    )
  }
}
