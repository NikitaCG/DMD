// @ flow
import React from 'react';
import connect from 'react-redux/es/connect/connect';
import * as airActions from '../../actions/airActions';
import Flights from '../../Components/Flights/index';

import mainStyle from '../../styles/main.scss';

type Props = {
    air: Object,
    loadAir: Function,
}

class App extends React.Component<Props> {
	constructor(props) {
		super(props);
		this.state = {
		    status: '',
			search: '',
		};

		document.title = 'Flight display';
	}

	componentDidMount() {
	    this.props.loadAir();
	}

	onChangeStatus = (e) => {
	    this.setState({
			status: e.target.id,
		});
	};

    onSearch = (e) => {
    	this.setState({
    		search: e.target.value,
    	});
    }

    render() {
	    // console.log('air', this.props.air);
	    return (
	        <div>
    			<div className={mainStyle.title}>
    				<h1>
                        Flight display
    				</h1>
    			</div>
	        <div className={mainStyle.board__container}>

    			<div className={mainStyle.board__item}>
    				<div className={mainStyle.board__statusButtonsContainer}>
    					<button
    						id='departure'
    						onClick={this.onChangeStatus}
    					>
                            departure
    					</button>
    					<button
    						id='arrival'
    						onClick={this.onChangeStatus}
    					>
                            arrival
    					</button>
    					<button
    						id='delaying'
    						onClick={this.onChangeStatus}
    					>
                            delaying
    					</button>
    				</div>
    				<div className={mainStyle.board__flights}>
    					{this.state.status
    						? this.props.air.air.filter(item => item.status === this.state.status).map(item => <Flights key ={item.number} name={item.name} date={item.date} number={item.number} />)
    						: ''
    					}
    				</div>
    			</div>
    			<div className={mainStyle.board__item}>
    				<div>
    					<input
    						type='text'
    						value={this.state.search}
    						onChange={this.onSearch}
    						placeholder='search'
    					/>
    				</div>
    				<div className={mainStyle.board__flights}>
    					{this.state.search
    						? this.props.air.air.filter(item => item.number.includes(this.state.search)).map(item => <Flights key ={item.number} name={item.name} date={item.date} number={item.number} />)
    						: ''
    					}
    				</div>
    			</div>
    		</div>
    		</div>
    	);
    }
}

const mapStateToProps = state => ({
	air: state.airReducer,
});

const mapDispatchProps = dispatch => ({
	loadAir: () => airActions.loadAir(dispatch),
});

export default connect(
	mapStateToProps,
	mapDispatchProps,
)(App);
