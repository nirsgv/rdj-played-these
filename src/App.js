import React, { Component } from 'react';
import * as HtmlGroup from './components/htmlGroup';
import Items from './containers/Items';
import Filters from './containers/filters/Filters';
import BackgroundLayer from './components/backgroundLayer';
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
        window.addEventListener('scroll', this.handleScroll);

    };
    handleScroll() {
        var winHeight = window.innerHeight;

        // Annoying to compute doc height due to browser inconsistency
        var body = document.body;
        var html = document.documentElement;
        var docHeight = Math.max( body.scrollHeight, body.offsetHeight,
            html.clientHeight, html.scrollHeight, html.offsetHeight );

        var value = document.body.scrollTop;
        console.log(window.pageYOffset);
    }
    render() {
        console.log(this.props.tracks);
    return (
          <div className="App">
          <HtmlGroup.Header className='main-header'>
          </HtmlGroup.Header>
              <Filters/>
              <HtmlGroup.Main>
                 <BackgroundLayer selectedTrackId={this.props.tracks.selectedTrackId} tracksData={this.props.tracks.tracksData}/>
                 <Items />
              </HtmlGroup.Main>
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