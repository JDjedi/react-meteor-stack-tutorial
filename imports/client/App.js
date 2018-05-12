
import React from 'react';
import { createContainer } from 'meteor/react-meteor-data'; // you need to figure out how to use withTracker
import Items from '../api/items';


class App extends React.Component {

	render() {
		return (
			<div>
				<header>
					<h1>Hello World!</h1>
				</header>
				<main>
					<p>This is the paragraph</p>
				</main>
			</div>
		);
	}
}

export default createContainer(() => {
	return {
		items: Items.find({}).fetch
	}
}, App);
