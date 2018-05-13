import React from 'react';
import Items from '../api/items';

export default class Item extends React.Component {
	voteOne() { // method to simply increment a value
		Items.update(this.props.item._id, { // use this to update the database, update based on the _id
			$inc: {
				'itemOne.value': 1
			}
		})
	}

	voteTwo() {
		Items.update(this.props.item._id, {
			$inc: { // method to simply increment a value
				'itemTwo.value': 1
			}
		})
	}

	render() {
		return (
			<div className='item'>
				<div className='vote-one' onClick={this.voteOne.bind(this)}>
					<span>{this.props.item.itemOne.value}</span>
					<li key={this.props.item._id}>{this.props.item.itemOne.text}</li>
				</div>
				<span>V.</span>
				<div className='vote-two' onClick={this.voteTwo.bind(this)}>
					<span>{this.props.item.itemTwo.value}</span>
					<li key={this.props.item._id}>{this.props.item.itemTwo.text}</li>
				</div>
			</div>
		) 
	}
}

