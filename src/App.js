import React, { Component } from 'react';
import * as HtmlGroup from './components/HtmlGroup';
import Items from './containers/Items';
import './App.css';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import { fetch_tracks } from './reducers/tracks';
class App extends Component {
    constructor(props){
        super(props);
    };
    componentDidMount(){
        fetch('http://localhost/rdj-show-trax-project/src/rdj-show-trax/', {
            method: 'post',
        })
        .then(res=>res.json())
        .then(res => this.props.fetch_tracks(res));
    };

    render() {
    return (
      <div className="App">
      <HtmlGroup.Header className='main-header'>

      </HtmlGroup.Header>
      <HtmlGroup.Main>
        <Items />
      </HtmlGroup.Main>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}
const mapStateToProps = state => ({
    tracks: state.tracks
});

const mapDispatchToProps = dispatch => bindActionCreators({
    //changePage: () => push('/about-us'),
    fetch_tracks
}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);