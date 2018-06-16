import React, { Component } from 'react';
import * as HtmlGroup from './components/htmlGroup';
import Items from './containers/Items';
import ExpandedItem from './containers/expandedItem';
import Filters from './containers/filters/Filters';
import BackgroundLayer from './components/backgroundLayer';
import './App.css';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import { fetch_tracks } from './reducers/tracks';
import { set_scroll_offset } from './reducers/document';
import { ParallaxProvider ,Parallax } from 'react-scroll-parallax';

class App extends Component {
    constructor(props){
        super(props);
        //set_scroll_offset = const set_scroll_offset.bind
        this.handleScroll = this.handleScroll.bind(this);

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
        this.props.set_scroll_offset(window.pageYOffset);
    }
    render() {
        console.log(this.props.tracks);
    return (
          <div className="App">
              <ParallaxProvider>
              <HtmlGroup.Header className='main-header'>
          </HtmlGroup.Header>
              <Filters/>
              <HtmlGroup.Main>
                 <BackgroundLayer
                     selectedTrackId={this.props.tracks.selectedTrackId}
                     tracksData={this.props.tracks.tracksData}
                     docScrollHeight={this.props.document.doc_offset_height}
                 />
                 <Items />
                 <ExpandedItem />
              </HtmlGroup.Main>
              </ParallaxProvider>
          </div>
    );
  }
}
const mapStateToProps = state => ({
    tracks: state.tracks,
    document: state.document
});

const mapDispatchToProps = dispatch => bindActionCreators({
    //changePage: () => push('/about-us'),
    fetch_tracks,
    set_scroll_offset
}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);