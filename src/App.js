import { Component } from 'react'
import './App.css'
import Result from './components/Result'
import Keypad from './components/Keypad'

export default class App extends Component {

	constructor(){
		super()

		this.state = {
			result: ''
		}
	}

	onClick = key => {
		if(key === '=') this.calculate()
		else if (key === 'C') this.reset()
		else {
			let result = (this.state.result + key).replace('**', '^')
			result = result.replace('--', '+')
			this.setState({ result })
		}
	}

	calculate = () => {
		if(this.state.result === '') return
		let result = this.state.result.replace('--', '+')
		result = result.replace('^', '**')
		try {
			console.log(result)
			result = eval(result)
		} catch (e) {
			result = 'error'
		}

		this.setState({
			result
		})
	}

	reset = () => {
		this.setState({result: ''})
	}
	

	render() {
		return (
			<div>
				<div className='calculator'>
					<Result result={this.state.result}/>
					<Keypad onClick={this.onClick}/>
				</div>
			</div>
		)
	}
}
