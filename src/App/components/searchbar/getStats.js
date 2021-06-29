export const getStats = async (username) => {
  const API_KEY = "c23c1404-f353-45ab-b560-30353a7f8a35";
  return fetch(
    `https://api2.r6stats.com/public-api/stats/${username}/pc/generic`,
    {
      headers: {
        Authorization: "Bearer " + API_KEY,
      },
    }
  )
    .then((res) => res.json())
    .then((stats) => {
      return stats;
    });
};
