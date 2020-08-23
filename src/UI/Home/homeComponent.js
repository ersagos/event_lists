import React from 'react';
import { gql } from '@apollo/client';
import {apolloClient} from "../../Apollo/client"
import { useState, useEffect } from 'react';
import VideoComponent from "../Video/videoComponent"
import ChallengersComponent from "../Challengers/challengersComponent"
import TagsComponent from "../Tags/tagsComponent"
import "./homeComponent.scss"
import { useHistory } from "react-router-dom";
import LoadingComponent from "../Loading/loadingComponent"

const QLquery = gql`
query allEvents {
  allEvents(tags: "vod", limit: 10){
    items {
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
    }
  }
}
`

function DisplayEvent(props) {

    var id = props.event.id;

    function handleClickEvent() {
      props.onClick(id);

    }

    return (
        <div class="event-element" onClick={handleClickEvent}>
           
          <div class="center"> <VideoComponent video={props.event.Video}></VideoComponent></div>
           <div class="center"><h2>{props.event.name}</h2> </div>
           <ul class="displayEventList">
                <li><ChallengersComponent challengers={props.event.Challengers}></ChallengersComponent></li>
                <li><TagsComponent tags={props.event.Tags}></TagsComponent></li>
           </ul>
        </div>);

}


function HomeComponent(props) {

    const [events, setEvents] = useState(null);

    const history = useHistory();

    function handleClickEvent(id) {
      history.push("/event/" + id);

    }

    useEffect(() => {
        function handleChangeEnvents(events) {
            setEvents(events);
            document.title = "Event list";
        }

        document.title = "Loading";

        let client = apolloClient();

        client
        .query({
          query: QLquery
        })
        .then(result => {
            
           handleChangeEnvents(result.data.allEvents.items);}
            );



    }, []);

    if(events !== null) {
        var res = [];
        
        events.forEach((element, index) => {
            if( (index) % 2 === 0) {
                res.push(<div class="break-flex"></div>)
            }


            res.push( <DisplayEvent event={element} onClick={handleClickEvent}></DisplayEvent>);
        });

    return (

        <div>
            <div class="event-list">
                {res}
            </div>
        </div>
    );
    }

    else return <div><LoadingComponent></LoadingComponent></div>
}

export default HomeComponent;