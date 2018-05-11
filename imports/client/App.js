
import React from 'react';
let myName = 'JD';

export default class App extends React.Component {

	constructor() { // first thing that runs when this class is being instantiated
		super(); // why? allows you to access functions from the obj App, parents
		// data flows downward!
		// this.state init => this.state.count => this.props.count
		this.state = { 
			count: 0
		}
	}

	headingClick() { // this function is called below in render()!
		this.setState({count: this.state.count + 1})
	}

	render() {
		return (
			// on the line below you are calling headingClick in a global context, add this.headinclick
			// heading count="" below makes the count and then passes the object to the HEADING component
			<div>
				<h1 >Hello {myName}!</h1>
				<button onClick={this.headingClick.bind(this)}>Click Me!</button>
				<Heading count={this.state.count}/> 
			</div>
		);
	}
}

//data only flows from the top down!
class Heading extends React.Component { // use this.props.count to call the count from the APP component 
	render() {
		return(
			<div>
				<h3>Keep it going!</h3>
				<p> count: {this.props.count}</p> 
			</div>
		)
	}
}