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
      ],
      curr_coin: 'btc'
    };
  }

  handleClick (coin) {
    this.setState({
      curr_coin: coin
    });
  }

  render () {
    return (
      <div>
        <div className="header">
          <span>
            Drypto
          </span>
        </div>
        <Bar 
          coins={this.state.coins}
          curr_coin={this.state.curr_coin}
          onClick={(coin) => this.handleClick(coin)}
        />
        <Display curr_coin={this.state.curr_coin}/>
      </div>
    );
  }
}

export default App;