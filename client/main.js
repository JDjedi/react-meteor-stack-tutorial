
import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom'; // just bring in render from react-dom

import App from '../imports/client/App';

Meteor.startup(() => {
	render(<App />, document.getElementById('root'));
});



