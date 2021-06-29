// Internal components
import Overall from "../Overall";
import Ranked from "../Ranked";
import Casual from "../Casual";
import UserInfo from "../UserInfo";

const StatItem = ({ stat }) => {
  return (
    <div className="stats-section">
      <UserInfo stat={stat} />
      <Overall stat={stat} />
      <Ranked stat={stat} />
      <Casual stat={stat} />
    </div>
  );
};

export default StatItem;
