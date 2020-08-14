/**
 * Displays the photos and the recipe
 */

import React from 'react';
import PropTypes from 'prop-types';
import btc_recipe from '../drinks/btc.json';
import xtz_recipe from '../drinks/xtz.json';

const RECIPES = {
  btc: btc_recipe,
  eth: xtz_recipe,
  xtz: xtz_recipe,
  ltc: xtz_recipe
};

class Display extends React.Component {
  constructor (props) {
    super(props);
  }

  format_recipe (obj) {
    return (
      <div>
        ingredients/
        <table>
          <tbody>
            {
              obj.ingredients.map(
                elem => (
                  <tr key={elem.item}>
                    <td>─ {elem.item}</td>
                    <td>.........</td>
                    <td>{elem.quantity}</td>
                  </tr>
                )
              )
            }
          </tbody>
        </table>
        <br></br>
        garnish/
        <table>
          <tbody>
            { 
              !obj.garnish ? null :
                obj.garnish.map(
                  elem => (
                    <tr key={elem}>
                      <td>─ {elem}</td>
                    </tr>
                  )
                )
            }
          </tbody>
        </table>
      </div>
    );
  }

  render () {
    return (
      <div className="display_wrapper">
        <div className="display_left">
          {this.props.curr_coin}
        </div>
        <div className="display_right">
          {this.format_recipe(RECIPES[this.props.curr_coin])}
        </div>
      </div>
    );
  }
}

Display.propTypes = {
  curr_coin: PropTypes.string.isRequired
};

export default Display;