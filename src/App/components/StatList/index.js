//Internal Imports
import StatItem from "./StatItem";

const StatList = ({ stats }) => {
  console.log(stats);
  if (Array.isArray(stats) && stats.length) {
    return stats.map((stat) => <StatItem stat={stat} />);
  } else {
    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <p style={{ margin: 100, fontSize: 50 }}> No matches found...</p>
      </div>
    );
  }
};

export default StatList;
