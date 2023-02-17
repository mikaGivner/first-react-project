import "./LandingPage.css";

export default function VoteAccepted(props) {
  return (
    <div className={props.className}>
      {props.p}
      <button className="logout" onClick={props.onClick}>
        Log-out
      </button>
    </div>
  );
}
