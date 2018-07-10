import React, { Component } from 'react';
import * as HtmlGroup from './components/htmlGroup';
import Items from './containers/Items';
import ExpandedItem from './containers/expandedItem';
import Filters from './containers/filters/Filters';
import BackgroundLayer from './components/backgroundLayer';
import Logo from './components/logo';
import './App.css';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import { fetch_tracks } from './reducers/tracks';
import { set_scroll_offset } from './reducers/document';
import { ParallaxProvider ,Parallax } from 'react-scroll-parallax';
import { set_filtering_now } from "./reducers/filters";
import face from './assets/svg/face.jpg'

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
        .then(res => {this.props.fetch_tracks(res);console.dir(JSON.stringify(res))});
        window.addEventListener('scroll', this.handleScroll);
    };
    handleScroll() {
        this.props.set_scroll_offset(window.pageYOffset);
    }
    render() {
       // console.log(this.props.tracks);
       // console.log(this.props.filters);
       // console.log(this.props.doc_scroll);


    return (
          <div className="App">
              <ParallaxProvider>
              <HtmlGroup.Header className={`main-header ${!this.props.doc_scroll ? 'normal' : 'minus-first-strip'}`} >
                  <div className="logo_txt-wrp">
                      <div className="logo_txt">
                        rdj played these
                      </div>
                      {!this.props.doc_scroll && <Logo set_filtering_now={this.props.set_filtering_now} filtering_now={this.props.filtering_now} />}
                  </div>
                  <Filters>
                      {this.props.doc_scroll ? <Logo set_filtering_now={this.props.set_filtering_now} filtering_now={this.props.filtering_now} /> : ''}
                  </Filters>

          </HtmlGroup.Header>
              <HtmlGroup.Main>
                 <BackgroundLayer
                     selectedTrackId={this.props.tracks.selectedTrackId}
                     tracksData={this.props.tracks.tracksData}
                     docScrollHeight={this.props.document.doc_offset_height}
                 />
                 <Items />
                  <div id="expand_player_group_wrp">
                      <ExpandedItem id={'expanded-item-holder'}/>
                  </div>
              </HtmlGroup.Main>
              </ParallaxProvider>
          </div>
    );
  }
}
const mapStateToProps = state => ({
    tracks: state.tracks,
    document: state.document,
    filtering_now: state.filters.filtering_now,
    filters: state.filters,
    doc_scroll: state.document.doc_offset_height
});

const mapDispatchToProps = dispatch => bindActionCreators({
    //changePage: () => push('/about-us'),
    fetch_tracks,
    set_scroll_offset,
    set_filtering_now
}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);