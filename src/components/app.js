import React from 'react';

class App extends React.Component {
  render() {
      //console.log(this.props.children)
    return (
      <div>
          THIS IS THE APP
          {this.props.children}
      </div>

    );
  }
}

export default App;
