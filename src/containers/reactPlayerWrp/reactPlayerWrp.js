import React, { Component } from 'react';
import { getItemById } from '../../helper_functions'
import ReactPlayer from 'react-player'
import screenfull from 'screenfull';
import { findDOMNode } from 'react-dom'
import Duration from './Duration'

    class ReactPlayerWrp extends Component {
        constructor(props){
            super(props);
            this.state = {
                url: this.props.youtubeTrackUrl,
                playing: true,
                volume: 0.8,
                muted: false,
                played: 0,
                loaded: 0,
                duration: 0,
                playbackRate: 1.0,
                loop: false
            };
            console.log(this.props);
        };
        load = url => {
            this.setState({
                url,
                played: 0,
                loaded: 0
            })
        };
            playPause = () => {
            this.setState({ playing: !this.state.playing })
        };
        stop = () => {
            this.setState({playing: false })
        };
        toggleLoop = () => {
            this.setState({ loop: !this.state.loop })
        };
        setVolume = e => {
            this.setState({ volume: parseFloat(e.target.value) })
        };
        toggleMuted = () => {
            this.setState({ muted: !this.state.muted })
        };
        setPlaybackRate = e => {
            this.setState({ playbackRate: parseFloat(e.target.value) })
        };
        onPlay = () => {
            console.log('onPlay');
            this.setState({ playing: true })
        };
        onPause = () => {
            console.log('onPause')
            this.setState({ playing: false })
        };
        onSeekMouseDown = e => {
            this.setState({ seeking: true })
        };
        onSeekChange = e => {
            this.setState({ played: parseFloat(e.target.value) })
        };
        onSeekMouseUp = e => {
            this.setState({ seeking: false });
            this.player.seekTo(parseFloat(e.target.value))
        };
        onProgress = state => {
            console.log('onProgress', state)
            // We only want to update time slider if we are not currently seeking
            if (!this.state.seeking) {
                this.setState(state)
            }
        };
        onEnded = () => {
            console.log('onEnded');
            this.setState({ playing: this.state.loop })
        };
        onDuration = (duration) => {
            //console.log('onDuration', duration)
            this.setState({ duration })
        };
        onClickFullscreen = () => {
            screenfull.request(findDOMNode(this.player))
        };
        renderLoadButton = (url, label) => {
            return (
                <button onClick={() => this.load(url)}>
                    {label}
                </button>
            )
        };
        ref = player => {
            this.player = player
        };

    render(props){
        const { url, playing=true, volume, muted, loop, played, loaded, duration, playbackRate } = this.state;
        const SEPARATOR = ' · ';
        const {youtubeTrackUrl , nowPlayingdTrackId, tracksData} = this.props;
        const itemDet = getItemById(nowPlayingdTrackId,tracksData);
console.dir(this.props);
console.dir(itemDet);
        return (
            <div className="react-player-wrp" >
                <div className='player-wrapper'>
                    <ReactPlayer
                        url={youtubeTrackUrl}
                        loop={true}
                        playing={this.state.playing} // handled by local state
                        width={'50px'}
                        height={'50px'}
                        style={{}}
                        playsinline={true}
                        ref={this.ref}
                        className='react-player'
                        playbackRate={playbackRate}
                        volume={volume}
                        duration={duration}
                        muted={muted}
                        onReady={() => console.log('onReady')}
                        onStart={() => console.log('onStart')}
                        onPlay={this.onPlay}
                        onPause={this.onPause}
                        //onBuffer={() => console.log('onBuffer')}
                        //onSeek={e => console.log('onSeek', e)}
                        onEnded={this.onEnded}
                        onError={e => console.log('onError', e)}
                        //onProgress={this.onProgress}
                        onDuration={this.onDuration}
                    />
                </div>
                <div className="controls-wrp" >
                    <h5>Controls</h5>
                    <button onClick={this.playPause}>{playing ? 'Pause' : 'Play'}</button>
{/*
                    <button onClick={this.stop}>Stop</button>
                    <button onClick={this.onClickFullscreen}>Fullscreen</button>
                    <button onClick={this.setPlaybackRate} value={.5}>0.5</button>
                    <button onClick={this.setPlaybackRate} value={1}>1</button>
                    <button onClick={this.setPlaybackRate} value={1.5}>1.5</button>
                    <button onClick={this.setPlaybackRate} value={2}>2</button>
*/}
                </div>
                <div className="range-wrp" >
                    <h5>Seek</h5>
                    <input
                        type='range' min={0} max={1} step='any'
                        value={played}
                        onMouseDown={this.onSeekMouseDown}
                        onChange={this.onSeekChange}
                        onMouseUp={this.onSeekMouseUp}
                    />
                </div>
                <div className="player-info-wrp" >
                    <h5>Info</h5>
{/*                    <dl>
                        <dt>volume</dt>
                        <dd>{volume.toFixed(3)}</dd>
                    </dl>
                    <dl>
                        <dt>played</dt>
                        <dd>{played.toFixed(3)}</dd>
                    </dl>
                    <dl>
                        <dt>loaded</dt>
                        <dd>{loaded.toFixed(3)}</dd>
                    </dl>*/}
                    <dl>
                        <dt>{itemDet.artist_name}</dt>
                        <dd>{itemDet.track_title}</dd>
                    </dl>
                    <dl>
                        <dt>duration</dt>
                        <dd><Duration seconds={duration} /></dd>
                    </dl>
                    <dl>
                        <dt>elapsed</dt>
                        <dd><Duration seconds={duration * played} /></dd>
                    </dl>
                    <dl>
                        <dt>remaining</dt>
                        <dd><Duration seconds={duration * (1 - played)} /></dd>
                    </dl>
                </div>
                {/*
            <table>

                <h2>State</h2>

                <table><tbody>
               <tr>
                    <th>url</th>
                    <td className={!url ? 'faded' : ''}>
                        {(url instanceof Array ? 'Multiple' : url) || 'null'}
                    </td>
                </tr>
                <tr>
                    <th>playing</th>
                    <td>{playing ? 'true' : 'false'}</td>
                </tr>
                <tr>
                    <th>volume</th>
                    <td>{volume.toFixed(3)}</td>
                </tr>
                <tr>
                    <th>played</th>
                    <td>{played.toFixed(3)}</td>
                </tr>
                <tr>
                    <th>loaded</th>
                    <td>{loaded.toFixed(3)}</td>
                </tr>
                <tr>
                    <th>duration</th>
                    <td><Duration seconds={duration} /></td>
                </tr>
                <tr>
                    <th>elapsed</th>
                    <td><Duration seconds={duration * played} /></td>
                </tr>
                <tr>
                    <th>remaining</th>
                    <td><Duration seconds={duration * (1 - played)} /></td>
                </tr>
                </tbody></table>
            </table>
            */}
            </div>
        )}
};


export default ReactPlayerWrp;
