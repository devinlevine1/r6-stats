const convertTime = (sec) => {
  const days = sec / (3600 * 24);
  const hours = (sec % (24 * 3600)) / 3600;
  return `${Math.floor(days)}d ${Math.floor(hours)}h`;
};

const Casual = ({ stat }) => {
  const killsPerMatch =
    stat.stats.queue.casual.kills /
    (stat.stats.queue.casual.wins + stat.stats.queue.casual.losses);

  const winrate =
    stat.stats.queue.casual.wins /
    (stat.stats.queue.casual.wins + stat.stats.queue.casual.losses);

  return (
    <div className="casual">
      <h1>Casual</h1>
      <div className="casual-stats">
        <div className="flex">
          <h2>K/D Ratio:</h2>
          <p>
            <span className="highlight-color-text">
              {stat.stats.queue.casual.kd.toFixed(2)}
            </span>
          </p>
        </div>
        <div className="flex">
          <h2>Kills: </h2>
          <p>
            <span className="highlight-color-text">
              {stat.stats.queue.casual.kills}
            </span>
          </p>
        </div>
        <div className="flex">
          <h2>Deaths: </h2>
          <p>
            <span className="highlight-color-text">
              {stat.stats.queue.casual.deaths}
            </span>
          </p>
        </div>
        <div className="flex">
          <h2>Kills per Match: </h2>
          <p>
            <span className="highlight-color-text">
              {killsPerMatch.toFixed(2)}
            </span>
          </p>
        </div>
        <div className="flex">
          <h2>Matches Played: </h2>
          <p>
            <span className="highlight-color-text">
              {stat.stats.queue.casual.wins + stat.stats.queue.casual.losses}
            </span>
          </p>
        </div>
        <div className="flex">
          <h2>Wins: </h2>
          <p>
            <span className="highlight-color-text">
              {stat.stats.queue.casual.wins}
            </span>
          </p>
        </div>
        <div className="flex">
          <h2>Losses: </h2>
          <p>
            <span className="highlight-color-text">
              {stat.stats.queue.casual.losses}
            </span>
          </p>
        </div>
        <div className="flex">
          <h2>Winrate: </h2>
          <p>
            <span className="highlight-color-text">{winrate.toFixed(2)}</span>
          </p>
        </div>
        <div className="flex">
          <h2>Playtime: </h2>
          <p>
            <span className="highlight-color-text">
              {convertTime(stat.stats.queue.casual.playtime)}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Casual;
