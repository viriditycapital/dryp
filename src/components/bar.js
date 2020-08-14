/**
 * Where we keep the links to the pages
 */

import React from 'react';
import PropTypes from 'prop-types';
import btc_logo from '../logos/btc.png';
import eth_logo from '../logos/eth.png';
import xtz_logo from '../logos/xtz.png';
import ltc_logo from '../logos/ltc.png';

let LOGOS = {
  btc: btc_logo,
  eth: eth_logo,
  xtz: xtz_logo,
  ltc: ltc_logo
};

class BarIcon extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div className="bar_icon">
        <img src={LOGOS[this.props.value]}/>
      </div>
    );
  }
}

BarIcon.propTypes = {
  value: PropTypes.string.isRequired
};

class Bar extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div className="bar_wrapper">
        <div className="bar">
          {
            this.props.coins.map(
              coin => (<BarIcon key={coin} value={coin}/>)
            )
          }
        </div>
      </div>
    );
  }
}

Bar.propTypes = {
  coins: PropTypes.array.isRequired
};

export default Bar;