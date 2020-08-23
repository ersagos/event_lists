import React from 'react';
import { gql } from '@apollo/client';
import { apolloClient } from "../../Apollo/client"
import { useState, useEffect } from 'react';
import ChallengersComponent from "../Challengers/challengersComponent"
import TagsChallengersComponent from "../Tags/tagsComponent"
import "./eventComponent.scss"
import StreamsComponent from '../Streams/StreamsComponent';
import VideoComponent from "../Video/videoComponent"
import LoadingComponent from "../Loading/loadingComponent"


function DisplayEvent(props) {


    var res = [];


 

    res.push(<h2 class="center">{props.event.name}</h2>);

    res.push(<div class="center"><VideoComponent video={props.event.Video}></VideoComponent></div>)

    res.push(<div class="center"><ChallengersComponent challengers={props.event.Challengers}></ChallengersComponent></div>)

    res.push(<div class="center"><TagsChallengersComponent tags={props.event.Tags}></TagsChallengersComponent></div>)

    res.push(<div class="center"><StreamsComponent streams={props.event.Streams}></StreamsComponent></div>)


    return res;


}


function EventComponent(props) {


    const [event, setEvent] = useState(null);


    useEffect(() => {
        function handleEventChange(result) {
            setEvent(result.data.event);
            if(result.data.event && result.data.event.name) {
                document.title = result.data.event.name + " - Event";
            }
        }

        document.title = "Loading";
        let client = apolloClient();

        let QLquery = gql`
            query getEvents {
                 event(id: "${props.match.params.id}"){
                 id
                Video {
                  poster
                }
                 name
                Challengers {
                     name
                     pictureUrl
                }
                Tags {
                    name
                }
                Streams {
                    name
                    url
                    key
                    startedAt
                    streamType
                    id
                }
            }
        }`;

        client
            .query({
                query: QLquery
            })
            .then(result => handleEventChange(result));

    }, []


    );





    if (event)
        return (

            <div class="componentBody">
            
            <DisplayEvent event={event}></DisplayEvent>
            
            </div>
            
        );

    else return <LoadingComponent></LoadingComponent>
}

export default EventComponent;


