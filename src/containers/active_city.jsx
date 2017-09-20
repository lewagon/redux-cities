import React from 'react';
import { connect } from 'react-redux';

const ActiveCity = (props) => {
  return (
    <div className="active-city">
      <p>{props.activeCity.name}</p>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    activeCity: state.activeCity
  };
}

export default connect(mapStateToProps)(ActiveCity);
