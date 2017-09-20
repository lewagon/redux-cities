import React, { Component } from 'react';

class CityList extends Component {
  renderList() {
    this.props.cities.map((city) => {
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

export default CityList;
