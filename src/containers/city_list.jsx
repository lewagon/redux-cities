import React, { Component } from 'react';
import { connect } from 'react-redux';

class CityList extends Component {
  renderList() {
    return this.props.cities.map((city) => {
      return (
        <li className="list-group-item">{city.name}</li>
      );
    });
  }

  render() {
    return (
      <ul className="list-group cities">
        {this.renderList()}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  return {
    cities: state.cities
  };
}

export default connect(mapStateToProps)(CityList);
