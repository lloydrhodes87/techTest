const axios = require('axios');

export const fetchGithub = async (search, page) => {
  const { data } = await axios.get(
    `https://api.github.com/search/repositories?q=${search}&page=${page}&per_page=10`
  );
  return data;
};
