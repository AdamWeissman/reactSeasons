import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay'
import Spinner from './Spinner'

class App extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = { lat: null, errorMessage: '' };
  // }  THIS IS ONE WAY OF SETTING STATE

  state = { lat: null, errorMessage: ''}; 
  //the above line is equivalent to the instructor above

  componentDidMount() {
      window.navigator.geolocation.getCurrentPosition(
        position => this.setState({ lat: position.coords.latitude }),
        err => this.setState({errorMessage: err.message })
        //remember, argument for arrow functions doesn't need parens around it
    );
  }

  render() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>
    }

    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />
    }

    return <Spinner message="Please Accept Location Request" />
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
)

