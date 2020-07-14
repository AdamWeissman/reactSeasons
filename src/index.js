import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    // this is the ONLY time we do direct assignment
    // to this.state ... nowhere else
    this.state = { lat: null };

    window.navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({ lat: position.coords.latitude });
      },
      err => console.log(err) 
      //remember, argument for arrow functions doesn't need parens around it
    );

  }

  render() {
    return <div>Latitude: {this.state.lat} </div>
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
)

