import React from 'react';
import Bar from './components/bar';
import Display from './components/display';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      coins: [
        'btc',
        'eth',
        'xtz',
        'ltc'
      ]
    };
  }

  render () {
    return (
      <div>
        <div className="header">

        </div>
        <Bar />
        <Display />
      </div>
    );
  }
}

export default App;