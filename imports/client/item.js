import React from 'react';


export default class Item extends React.Component {
	render() {
		return (
			<div className='item'>
				<div className='vote-one'>
					<span>{this.props.item.itemOne.value}</span>
					<li key={this.props.item._id}>{this.props.item.itemOne.text}</li>
				</div>
				<span>V.</span>
				<div className='vote-one'>
					<span>{this.props.item.itemTwo.value}</span>
					<li key={this.props.item._id}>{this.props.item.itemTwo.text}</li>
				</div>
			</div>
		) 
	}
}

