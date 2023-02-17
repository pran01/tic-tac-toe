import "../styles/WinStatus.css";

type StatusProps = {
  user: string;
  setWonStatus: React.Dispatch<React.SetStateAction<boolean>>;
};

const WinStatus = ({ user, setWonStatus }: StatusProps) => {
  return (
    <section className="win-status-overlay">
      <button className="close-status-btn" onClick={() => setWonStatus(false)}>
        X
      </button>
      <p>Congratulations</p>
      <p>User {user} Won!!</p>
    </section>
  );
};

export default WinStatus;
