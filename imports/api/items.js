
import { Mongo } from 'meteor/mongo';

const Items = new Mongo.Collection('items');

// bc this file is in the api folder client and server import folders will have access to it
export default Items; // allows this collection to exits outside of this file!

