export const getStats = async (username) => {
  return fetch(
    `https://api2.r6stats.com/public-api/stats/${username}/pc/generic`,
    {
      headers: {
        Authorization: "Bearer " + process.env.REACT_APP_R6_STATS_API_KEY,
      },
    }
  )
    .then((res) => res.json())
    .then((stats) => {
      return stats;
    });
};
