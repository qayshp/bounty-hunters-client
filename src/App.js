import React, { Component } from 'react'

import Poster from './Poster'
import NewBountyForm from './NewBountyForm'
import ShowBounty from './ShowBounty'
import SERVER_URL from './constants/server'
import './App.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      bounties: [],
      current: {}
    }
  }

  render() {
    const moreInfo = <ShowBounty bounty={this.state.current} />
    const posters = this.state.bounties.map((bounty, index) => {
      return (
        <Poster
          key={index}
          bounty={bounty}
        />
      )
    })

    return (
      <div className="App">
        <h1>WANTED</h1>
        <div>
          <h3>Wanted Poster Bulletin Board</h3>
          {posters}
        </div>
        <hr />
        {moreInfo}
        <NewBountyForm />
      </div>
    );
  }
}

export default App












