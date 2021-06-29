const UserInfo = ({ stat }) => {
  console.log(stat);
  return (
    <div className="user-info">
      <div className="username">
        <h1>{stat.username}</h1>
        <p>Level: {stat.progression.level}</p>
        <img src={stat.avatar_url_146} />
      </div>
      <div className="user-info-stats">
        <p></p>
        <div />
      </div>
    </div>
  );
};

export default UserInfo;
