
import { Mongo } from 'meteor/mongo';

const Items new Mongo.Collection('items');

// bc its in the api folder client and server import folders will have access to it
export defaut Items; // allows this collection to exits outside of this file!

