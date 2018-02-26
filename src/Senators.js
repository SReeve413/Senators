import React, { Component } from 'react'
import Senators from './data/senators'

export default class extends Component {
  
  state = {
    name: '',
    party: [],
    senators: []
  }
  
  filterSenatorsByName(name) {
    return Senators.filter((senator) => senator.person.firstname === name || senator.person.lastname === name)
  }
  
  renderSenators() {
      {this.setState({senators: this.filterSenatorsByName(this.state.name)})}
      // console.log(this.state.name);
      // this.setState({ senators: filterSenatorsByName(this.state.name) })
      return this.state.senators.map(senator => (
      <div>{senator.person.firstname} {senator.person.lastname}</div>
    ))
  }
  
  render() {
    return (
      <div>
        <h1>Senators</h1>
        <form>
          <div>
            <input type="search" placeholder="Filter by Name" value={this.state.name} onChange={e => this.setState({ name: e.target.value })} />

          </div>
          {/*<div>*/}
            {/*<input type="text" />*/}
          {/*</div>*/}
        </form>
        {this.renderSenators()}
      </div>
    )
  }
}
