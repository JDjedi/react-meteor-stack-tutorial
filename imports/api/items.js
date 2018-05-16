
import { Mongo } from 'meteor/mongo';

const Items = new Mongo.Collection('items');

if (Meteor.isServer) {

	// this below makes data available to the client
	Meteor.publish('allItems', function() {
		return Items.find({}, {
			limit: 50, // returns the amount of items only as needed 
			sort: { lastUpdated: 1 }
		});					// returns all the items!
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
			check(item, Object)
			let lastUpdated = new Date();
			if(Meteor.userId()) { // checks if user is logged in
				if(position === 'itemOne') { // checks which item to update
					Items.update(item._id, {
						$inc: {
							'itemOne.value': 1
						},
						$set: {
							lastUpdated
						}
					})
				} else {
					Items.update(item._id, {
						$inc: {
							'itemTwo.value': 1
						},
						$set: {
							lastUpdated
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





