import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor(props) {
      super(props);
//This is the only time we do direct assignment
//to this.state
      this.state = { lat: 40 };
 this.state = { lat: null, errMessage: ''};

      window.navigator.geolocation.getCurrentPosition(
        position => {
           this.setState({ lat: position.coords.latitude });
        },
         err => {
             this.setState({ errorMessage: err.message });
         }
       );
    }

    //React says we have to  define render!!
 render() {
    if(this.state.errorMessage && !this.state.lat) {
        return <div>Error: {this.state.errorMessage}</div>
    }

        if(this.state.lat &&! this.state.errorMessage) {
            return <div>Lattitude: {this.state.lat}</div>;
        }
        return <div>Loading!</div>;
 }
}

ReactDOM.render(<App />, document.querySelector('#root'));
