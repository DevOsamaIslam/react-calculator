import { Component } from 'react'

export default class Result extends Component {

	render() {
		let result = this.props.result
		return (
			<div className='result'>
				<h1>
					{result}
				</h1>    
			</div>
		)
	}
}