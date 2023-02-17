import "./LandingPage.css";
import Party from "./Party";
import LandingPage from "./LandingPage";
import popImg from "../img/pop music.png";
import rockImg from "../img/rock music.png";
import jazzImg from "../img/jazz music.png";
import VoteAccepted from "./VoteAccepted";
import { useState } from "react";

export default function VotePage(props) {
  function acceptedMassege() {
    setAcceptedClass("accepted isDisplay");
  }
  const [acceptedClass, setAcceptedClass] = useState("accepted noDisplay");
  function Logout() {
    setAcceptedClass("accepted noDisplay");
  }
  const partyData = [
    { id: 1, party: popImg },
    { id: 2, party: rockImg },
    { id: 3, party: jazzImg },
  ];

  return (
    <div className={props.className}>
      <VoteAccepted
        onClick={Logout}
        className={acceptedClass}
        p={"thank U for your vote"}
      ></VoteAccepted>
      <h2>So Which Music Do U Love?</h2>
      <div className="parties">
        {partyData.map((partyCard) => {
          return (
            <Party
              onClick={acceptedMassege}
              key={partyCard.id}
              isImg={partyCard.party}
            ></Party>
          );
        })}
      </div>
    </div>
  );
}
