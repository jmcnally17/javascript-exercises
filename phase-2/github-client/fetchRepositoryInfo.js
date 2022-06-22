const got = require('got');


const fetchRepositoryInfo = (url, callback) => {
  let string = 'https://api.github.com/repos/'
  string = string.concat(url)
  got(string)
    .then((response) => {
      callback(JSON.parse(response.body))
  });
};

module.exports = fetchRepositoryInfo;