import React from 'react';
import {noPlaceHolderLogo} from "../utils"
import "./videoComponent.scss"

function VideoComponent(props){

    
    if(props.video.poster) {

       return <img class="placeHolderImg" src={props.video.poster}></img>;
    }
    else return (<img class="center placeHolderImg" src={noPlaceHolderLogo}></img>)
    

}

export default VideoComponent;