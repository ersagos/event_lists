

import React from 'react';
import "./tagsComponent.scss"
import EmptyStateComponent from "../EmptyState/emptyStateComponent"

function TagsComponent(props) {


    var tags = [];

    props.tags.forEach(element => {
        tags.push(<div class="tag">{element.name}</div>);
    });


    if(tags.length > 0) {
    return <div class="componentBody">

        <div class="center"><h3>Tags</h3></div>
        
        <div class="center tagGrid">
          {tags}
        </div>
     
    </div>

    }

    else return    <div class="componentBody">
        <div class="center"></div><EmptyStateComponent title="tags"></EmptyStateComponent>
    </div>
    
    

}

export default TagsComponent;