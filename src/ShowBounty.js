import React, { Component } from 'react'

class ShowBounty extends Component {
	constructor() {
		super()
		this.state = {
			bounty: {}
		}
	}

	componentDidMount() {
		this.setState({ bounty: this.props.bounty })
	}

	render(){
    let display = <h3>Crime is on the rise!</h3>
    if(this.props.bounty && this.props.bounty.name){
      display = (
          <div className="show-bounty">
            <h2>{this.state.bounty.name}: ${this.state.bounty.reward}</h2>
            <h4>Wanted For: {this.state.bounty.wantedFor}</h4>
            <p>
              Last seen on the <strong>{this.state.bounty.ship}</strong>
            </p>
            <p>
              Hunted by: {(this.state.bounty.hunters || []).join(', ')} for {this.state.bounty.client}
            </p>
            <h4>STATUS: {this.state.bounty.captured ? 'CAUGHT' : 'AT LARGE'}</h4>
          </div>
        )
    }
		return(
			<div>
        {display}
      </div>
		)
	}
}

export default ShowBounty








