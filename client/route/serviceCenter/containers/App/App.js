import React, { PropTypes, Component } from 'react'

class App extends Component {

	static propTypes = {
	}

	render() {
		return(
      <div>
        serviceCenter
        {this.props.children}
      </div>
		)
	}

}

export default App
