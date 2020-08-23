import React from 'react';
import "./StreamsComponent.scss"
import EmptyStateComponent from "../EmptyState/emptyStateComponent"

function DisplayStream(props) {

    var video;

    if(props.stream.url) {

        video = <video controls class="streamPlayer" src={props.stream.url} type="video/mp4" />;

    }

    else {
       video = (<EmptyStateComponent title="video"></EmptyStateComponent>);

    }

    return <div class="componentBody streamElement">
        <div class="center">
            <h4>{props.stream.name}</h4>
        </div>

        <div class="center">
            {video}
        </div>

    </div>

   

}


function StreamsComponent(props) {


    var videos = [];


    props.streams.forEach(element => {
        videos.push(<DisplayStream stream={element}></DisplayStream>);
    });

    return <div class="componentBody">
        <div class="center">
        <h3>Streams</h3>
        </div>

        <div >
            {videos}
        </div>

    </div>

}

export default StreamsComponent;