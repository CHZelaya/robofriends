import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import { setSearchField, requestRobots } from '../redux/actions/actions';
import MainPage from '../components/MainPage/MainPage';

const mapStateToProps = state => {
  // this is the state of the redux store
  // the state.searchRobots is the reducer's name
  // the searchField is the property we want to get from the reducer
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error,

  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => (dispatch(setSearchField(event.target.value))),
    onRequestRobots: () => dispatch(requestRobots())
  }
}


class App extends Component {

  render() {
    return (
      <MainPage {...this.props} />

    )
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(App);