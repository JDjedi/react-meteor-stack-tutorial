
import React from 'react';
import { withTracker } from 'meteor/react-meteor-data'; // you need to figure out how to use withTracker
import Item from './item';
import Items from '../api/items'; // this is the file that makes the collection on mongoDB


class App extends React.Component {
	render() {
		return (
			<div>
				<header>
					<h1>Hello World!</h1>
				</header>
				<main>
					<p>This is the paragraph</p>
					{this.props.items.map((item) => { // this funtion iterated through the array from the item.js in the api folder
						return <Item item={item} /> // you're pullint the Item from the import statement above in ./item
					})}
				</main>
			</div>
		);
	}
}

export default withTracker(() => {
	return {
		items: Items.find({}).fetch()
	}
})(App);


