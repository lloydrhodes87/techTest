const axios = require('axios');

export const fetchGithub = async (search, page) => {
  const { data } = await axios.get(
    `https://api.github.com/search/repositories?q=${search}&page=${page}&per_page=10`
  );
  return data;
};

export const fetchReadme = async (user, repo) => {
  const { data } = await axios.get(
    `https://api.github.com/repos/${user}/${repo}/readme`
  );
  return data;
};

export const fetchRepo = async id => {
  const { data } = await axios.get(`https://api.github.com/repositories/${id}`);
  return data;
};
