import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addCityActionCreator } from './actions/city';
import { incrementActionCreator } from './actions/counter';

class App extends Component {
  constructor(props) {
    super(props);
    this.list = ['Mumbai', 'Bengaluru', 'Chennai', 'Kanpur'];
  }

  addAllCities = () => {
    this.list.forEach((c) => {
      this.props.addCity(c);
    });
  };

  render() {
    return (
      <div className='container p-5'>
        <h3>Learning Redux | Counter: {this.props.counter}</h3>
        <hr />
        <ul>
          {this.props.cities.map((c) => (
            <li key={c}>{c}</li>
          ))}
        </ul>

        <button className='btn btn-primary' onClick={this.addAllCities}>
          Add All Cities
        </button>
        <button
          className='btn btn-warning ml-3'
          onClick={() => this.props.increment()}
        >
          Increment
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cities: state.cities,
    counter: state.counter,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addCity: (name) => dispatch(addCityActionCreator(name)),
    increment: () => dispatch(incrementActionCreator()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
