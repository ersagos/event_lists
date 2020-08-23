import React from 'react';
import { noPlaceHolderLogo } from "../utils"
import EmptyStateComponent from "../EmptyState/emptyStateComponent"
import "./challengersComponent.scss"

function ChallengerTableLine(props) {

  var challenger = props.challenger;

  var tds = [];

  if (challenger.pictureUrl) {
    tds.push(<td><img class="placeChallengerHolderImg" src={challenger.pictureUrl}></img></td>)
  }
  else {
    tds.push(<td><img class="placeChallengerHolderImg" src={noPlaceHolderLogo}></img></td>)
  }

  tds.push(<td>{challenger.name}</td>)

  return <tr>
    {tds}
  </tr>
}


function ChallengersComponent(props) {


  var trs = [];

  props.challengers.forEach(element => {
    trs.push(<ChallengerTableLine challenger={element}></ChallengerTableLine>);
  });

  if (trs.length > 0) {

    return <div class="componentBody">
      <div class="center"><h3>Challengers</h3></div>
      <div class="center">
        <table >
          <thead>
            <tr>
              <th >Logo</th>
              <th >Name</th>
            </tr>
          </thead>
          <tbody>
            {trs}
          </tbody>
        </table>
      </div>
    </div>

  }
  else return <div class="componentBody">
    <div class="center"><h3>Challengers</h3></div>
    <EmptyStateComponent title="challengers"></EmptyStateComponent>
  </div>


}

export default ChallengersComponent;