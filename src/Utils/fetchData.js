const axios = require('axios');

export const fetchGithub = async search => {
  const { data } = await axios.get(
    `https://api.github.com/search/repositories?q=${search}`
  );
  console.log(data);
  return data;
};
