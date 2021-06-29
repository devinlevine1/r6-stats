const convertTime = (sec) => {
  const days = sec / (3600 * 24);
  const hours = (sec % (24 * 3600)) / 3600;
  return `${Math.floor(days)}d ${Math.floor(hours)}h`;
};

const Overall = ({ stat }) => {
  const killsPerMatch =
    stat.stats.general.kills /
    (stat.stats.general.wins + stat.stats.general.losses);

  const winrate =
    stat.stats.general.wins /
    (stat.stats.general.wins + stat.stats.general.losses);

  return (
    <div className="overall">
      <h1>Overall</h1>
      <div className="overall-stats">
        <div className="flex">
          <h2>K/D Ratio: </h2>
          <p>
            <span className="highlight-color-text">
              {stat.stats.general.kd.toFixed(2)}
            </span>
          </p>
        </div>
        <div className="flex">
          <h2>Kills: </h2>
          <p>
            <span className="highlight-color-text">
              {stat.stats.general.kills}
            </span>
          </p>
        </div>
        <div className="flex">
          <h2>Deaths: </h2>
          <p>
            <span className="highlight-color-text">
              {stat.stats.general.deaths}
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
              {stat.stats.general.wins + stat.stats.general.losses}
            </span>
          </p>
        </div>
        <div className="flex">
          <h2>Wins: </h2>
          <p>
            <span className="highlight-color-text">
              {stat.stats.general.wins}
            </span>
          </p>
        </div>
        <div className="flex">
          <h2>Losses: </h2>
          <p>
            <span className="highlight-color-text">
              {stat.stats.general.losses}
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
              {convertTime(stat.stats.general.playtime)}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Overall;
