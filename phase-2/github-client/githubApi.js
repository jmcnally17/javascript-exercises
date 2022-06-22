const got = require('got');

class GithubApi {
  fetchRepositoryData = (repo, callback) => {
    let string = 'https://api.github.com/repos/'
    string = string.concat(repo)
    got(string)
      .then((response) => {
        callback(JSON.parse(response.body))
    });
  };
}

module.exports = GithubApi;