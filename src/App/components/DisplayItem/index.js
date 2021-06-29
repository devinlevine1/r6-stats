const DisplayItem = ({ leader }) => {
  const kd = () => {
    if (leader.stats.kd !== null) {
      return leader.stats.kd.toFixed(2);
    } else return null;
  };

  const winLoss = () => {
    if (leader.stats.wl !== null) {
      return leader.stats.wl.toFixed(2);
    } else return null;
  };

  console.log(leader);

  return (
    <>
      <div className="leaderboard">
        <div className="leaderboard-section">
          <div className="position-wrapper">
            <div className="leaderboard-position">{leader.position}.</div>
          </div>

          <div>
            <img src={leader.avatar_url_146}></img>
          </div>
        </div>
        <div className="leaderboard-info">
          <div>{leader.username}</div>
          <div>Level {leader.stats.level}</div>
          <div>K/D Ratio: {kd()}</div>
          <div>Win/Loss Ratio: {winLoss()}</div>
        </div>
      </div>
    </>
  );
};

export default DisplayItem;
