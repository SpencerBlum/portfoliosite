
import React from "react"
import YouTube from 'react-youtube';

class MyProjects extends React.Component {


    _onReady(event) {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
    }

    render() {
        const opts = {
            height: '300',
            width: '540',
            playerVars: {
                autoplay: 0,
            },
        };
        return (
            <div className="myProjects">
                <h1 id="projectTitle">My Most Recent Projects</h1>
                <div className="videoContainer">
                    <div id="videoOne">
                        <YouTube videoId="APmlnR9TWDg" opts={opts} onReady={this._onReady} id="Open Care" />
                    </div>
                    <div id="videoTwo">
                        <YouTube videoId="LyTdxMuS9EY" opts={opts} onReady={this._onReady} id="Market365" />
                    </div>
                </div>
            </div>
        )
    }
}

export default MyProjects