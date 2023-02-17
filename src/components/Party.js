import "./LandingPage.css";
import { useState } from "react";

export default function Party(props) {
  const [secondButtonClass, setSecondButtonClass] = useState(
    "secondButtons noButton"
  );
  const [firstButtonClass, setFirstButtonClass] = useState("voteNow isButton");

  function verification() {
    setSecondButtonClass("secondButtons isButton");
    setFirstButtonClass("voteNow noButton");
  }

  function cancelChine() {
    setSecondButtonClass("secondButtons noButton");
    setFirstButtonClass("voteNow isButton");
  }

  return (
    <div className="party">
      <img src={props.isImg} />
      <div className="firstButton">
        {" "}
        <button className={firstButtonClass} onClick={verification}>
          Vote Now
        </button>
      </div>
      <div className={secondButtonClass}>
        <p>Are U Sure?</p>
        <div className="verifyButtons">
          <button className="cancel" onClick={cancelChine}>
            cancel
          </button>
          <button onClick={props.onClick} className="ok">
            OK
          </button>
        </div>
      </div>
    </div>
  );
}
