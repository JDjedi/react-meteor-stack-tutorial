
import React from 'react';
import { withTracker } from 'meteor/react-meteor-data'; // you need to figure out how to use withTracker
import Item from './item';
import Items from '../api/items'; // this is the file that makes the collection on mongoDB
import { LoginButtons } from 'meteor/okgrow:accounts-ui-react';



class App extends React.Component {

	addItems(event) {
		event.preventDefault(); // prevents default funtionality, e.g. page refresh on hiting submit in the form below
		const itemOne = this.refs.itemOne.value.trim();
		const itemTwo = this.refs.itemTwo.value.trim();

		if (itemOne != '' && itemTwo != '') { // makes sure an empty string cannot be entered into the db

			Meteor.call('insertNewItem', itemOne, itemTwo, (err, res) => { // server side method call! This method is in api/items.js
				if (!err) {
					this.refs.itemOne.value = ''; // after insert this clears the input text box
					this.refs.itemTwo.value = '';
				}
			}); 

		}
	}

	showAll() {
		if (this.props.showAll) {
			Session.set('showAll', false)
		} else {
			Session.set('showAll', true)
		}
	}

	render() {
		if (!this.props.ready) { // if the data is NOT ready this will display!
			return <div>Loading...</div>
		}
		return(
			<div>
				<header>
					<h1>Vote-App</h1>
					<LoginButtons />
					<button onClick={this.showAll.bind(this)}>
						Show {this.props.showAll ? 'one' : 'all' } 
					</button>
				</header>
				<main>
					<form className='new-items' onSubmit={this.addItems.bind(this)}> 
						<input type='text' ref='itemOne'/>
						<input type='text' ref='itemTwo'/>
						<button type='submit'>Add Items</button>
					</form>
					{this.props.items.map((item) => { 						// this funtion iterated through the array from the item.js in the api folder
						return <Item item={item} key={item._id}/> 	// you're pullint the Item from the import statement above in ./item
					})}
				</main>
			</div>
		);
	}
}

export default withTracker(() => { // this is a container component which will get the data from your db and allow the client to access it here through its variables
	let itemsSub = Meteor.subscribe('allItems')
	let showAll = Session.get('showAll');
	return {
		showAll,
		ready: itemsSub.ready(), 		// fires a true or false wehether the subscription is ready or not, how you can check if its ready
		items: Items.find({}, {
			limit: showAll ? 50 : 1,	// if showAll then show 50, otherwise show 1
			sort: { lastUpdated: 1 }	// this is on items.js it uses that var to sort by, gives oldest value, -1 youngest
		}).fetch() 									// .fetch() gets us our array
	}
})(App);


