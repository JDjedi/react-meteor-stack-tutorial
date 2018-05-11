import { Meteor } from 'meteor/meteor';

import Items from '../imports/api/Items'

Meteor.startup(() => {
	Items.insert({
		itemOne: {
			text: 'U.S.',
			value: 0
		},

		itemTwo: {
			text: 'China',
			value: 0
		}
	});
});
