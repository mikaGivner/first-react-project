import "./LandingPage.css";

export default function VoteAccepted(props) {
  return (
    <div className={props.className}>
      Thank you for your vote
      <a href="./LandingPage.js" className="logout">
        Log-out
      </a>
    </div>
  );
}
