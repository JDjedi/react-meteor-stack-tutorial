
import React from 'react';
import { withTracker } from 'meteor/react-meteor-data'; // you need to figure out how to use withTracker
import Item from './item';
import Items from '../api/items'; // this is the file that makes the collection on mongoDB


class App extends React.Component {

	addItems(event) {
		event.preventDefault(); // prevents default funtionality, e.g. page refresh on hiting submit in the form below
		const itemOne = this.refs.itemOne.value.trim();
		const itemTwo = this.refs.itemTwo.value.trim();

		if (itemOne != '' && itemTwo != '') {
			Items.insert({
				itemOne: {
					text: itemOne,
					value: 0
				},

				itemTwo: {
					text: itemTwo,
					value: 0
				}
			})

			this.refs.itemOne.value = ''; // after insert this clears the input text box
			this.refs.itemTwo.value = '';
		}
	}

	render() {
		return (
			<div>
				<header>
					<h1>Hello World!</h1>
				</header>
				<main>
					<form onSubmit={this.addItems.bind(this)}> 
						<input type='text' ref='itemOne'/>
						<input type='text' ref='itemTwo'/>
						<button type='submit'>Add Items</button>
					</form>
					<p>This is the paragraph</p>
					{this.props.items.map((item) => { // this funtion iterated through the array from the item.js in the api folder
						return <Item item={item} key={item._id}/> // you're pullint the Item from the import statement above in ./item
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


