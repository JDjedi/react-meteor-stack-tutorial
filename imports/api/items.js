
import { Mongo } from 'meteor/mongo';

const Items = new Mongo.Collection('items');

if (Meteor.isServer) {

	// this makes data available to the client
	Meteor.publish('allItems', function() {
		return Items.find(); // returns all the items!
	}); 


	Meteor.methods({
		insertNewItem(itemOne, itemTwo) {
			check(itemOne, String); // part of the check package, first arg takes the param and the second verifies
			check(itemTwo, String); // that param is whatever data type you wish it to be
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
		},

		voteOnItem(item, position) {
			if(Meteor.userId()) { // checks if user is logged in
				if(position === 'itemOne') { // checks which item to update
					Items.update(item._id, {
						$inc: {
							'itemOne.value': 1
						}
					})
				} else {
					Items.update(item._id, {
						$inc: {
							'itemTwo.value': 1
						}
					})
				}
			}
		}
	});
}

export default Items; 
// ^^^bc this file is in the api folder client and server import folders will have access to it
// ^^^allows this collection to exist outside of this file!





