const convertTime = (sec) => {
  const days = sec / (3600 * 24);
  const hours = (sec % (24 * 3600)) / 3600;
  return `${Math.floor(days)}d ${Math.floor(hours)}h`;
};

const Ranked = ({ stat }) => {
  const killsPerMatch =
    stat.stats.queue.ranked.kills /
    (stat.stats.queue.ranked.wins + stat.stats.queue.ranked.losses);

  const winrate =
    stat.stats.queue.ranked.wins /
    (stat.stats.queue.ranked.wins + stat.stats.queue.ranked.losses);

  const MMR = stat.stats.queue.ranked.score;

  console.log(stat);

  return (
    <div className="ranked">
      <h1>Ranked</h1>
      <div className="ranked-stats">
        <div className="flex">
          <h2>K/D Ratio:</h2>
          <p>
            <span className="highlight-color-text">
              {stat.stats.queue.ranked.kd.toFixed(2)}
            </span>
          </p>
        </div>
        <div className="flex">
          <h2>Kills:</h2>
          <p>
            <span className="highlight-color-text">
              {stat.stats.queue.ranked.kills}
            </span>
          </p>
        </div>
        <div className="flex">
          <h2>Deaths:</h2>
          <p>
            <span className="highlight-color-text">
              {stat.stats.queue.ranked.deaths}
            </span>
          </p>
        </div>
        <div className="flex">
          <h2>Kills per Match:</h2>
          <p>
            <span className="highlight-color-text">
              {killsPerMatch.toFixed(2)}
            </span>
          </p>
        </div>
        <div className="flex">
          <h2>Matches Played:</h2>
          <p>
            <span className="highlight-color-text">
              {" "}
              {stat.stats.queue.ranked.wins + stat.stats.queue.ranked.losses}
            </span>
          </p>
        </div>
        <div className="flex">
          <h2>Wins:</h2>
          <p>
            <span className="highlight-color-text">
              {stat.stats.queue.ranked.wins}
            </span>
          </p>
        </div>
        <div className="flex">
          <h2>Losses:</h2>
          <p>
            <span className="highlight-color-text">
              {stat.stats.queue.ranked.losses}
            </span>
          </p>
        </div>
        <div className="flex">
          <h2>Winrate:</h2>
          <p>
            <span className="highlight-color-text">{winrate.toFixed(2)}</span>
          </p>
        </div>
        <div className="flex">
          <h2>Playtime:</h2>
          <p>
            <span className="highlight-color-text">
              {convertTime(stat.stats.queue.ranked.playtime)}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Ranked;
