import React from 'react';
import mainStyle from '../../styles/main.scss';

type Props = {
    name: string,
    date: string,
    number: string,
}

class Flights extends React.Component<Props> {
	render() {
		return (
			<div className={mainStyle.flights__container}>
				<div>{this.props.name}</div>
				<div>{this.props.date}</div>
				<div>{this.props.number}</div>
			</div>
		);
	}
}

export default Flights;
