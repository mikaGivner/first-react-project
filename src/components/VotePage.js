import { useState } from "react";

import "./LandingPage.css";
import Party from "./Party";
import LandingPage from "./LandingPage";
import popImg from "../img/pop music.png";
import rockImg from "../img/rock music.png";
import jazzImg from "../img/jazz music.png";
import VoteAccepted from "./VoteAccepted";

export default function VotePage(props) {
  const [acceptedClass, setAcceptedClass] = useState("accepted noDisplay");
  // STATE [CHOSENPARTY, SETCHOSENPARTY] = USESTATE("")
  // U PASS IN PROPS THE SETCHOSENPARTY TO CARD, AND IN EACH CARD IN ONCLICK YOU SET CHOSEN PART WITH PARTY NAME ->
  // () => SETCHOSENPARTY("JAZZ")
  function acceptedMassege() {
    setAcceptedClass("accepted isDisplay");
  }

  // CHECK WITH USESTATE IF USER VOTED (USERVOTED)
  // IF VOTED UPDATE LOCAL STORAGE AND UPDATE USER'S VOTE
  // IN THE LOCAL STORAGE U SHOULD HAVE AN ARRAY OF VOTED USERS! ARRAY OF OBJECTS, EACH OBJ WITH NAME, EMAIL AND VOTE
  // ONCE I CHANGED THE LIST, I SHOULD REPLACE THE OLD LIST IN LOCAL STORAGE WITH THE NEW LIST
  // THE STEPS ARE:
  // LOGIN - localStorage.setItem('userData', JSON.stringify(userData)) //  NAME, EMAIL (NO PW)
  // GET LIST FROM LOCAL STORAGE, LIKE THIS:
  // const usersVotes = localStorage.getItem('usersVotes') ? JSON.parse(localStorage.getItem('usersVotes')) : [];
  // CHECK IF USER VOTED - FIND BY EMAIL IF USER IS IN ARRAY
  // IF DIDNT VOTE - UPDATE USER VOTE - CREATE OBJ: USERVOTE = {EMAIL, VOTE}
  // THEN U UPDATE usersVotes ARRAY: usersVotes.push(userVOTE)
  // localStorage.setItem('usersVotes', JSON.stringify(usersVotes))
  // ON LOGOUT U REMOVE USERDATA FROM LOCAL STORAGE:
  // localStorage.removeItem('userData');

  function Logout() {
    setAcceptedClass("accepted noDisplay");
  }

  const partyData = [
    { id: 1, party: popImg }, // "PARTY: POP"
    { id: 2, party: rockImg }, // "PARTY: ROCK"
    { id: 3, party: jazzImg }, // "PARTY: JAZZ"
  ];

  return (
    <div className={props.className}>
      <VoteAccepted
        user={props.user}
        onClick={Logout}
        className={acceptedClass}
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
