const GithubApi = require('./githubApi');

class Github {
  constructor (api) {
    this.api = api;
  }
  getApi () {
    return this.api;
  }
  fetch (repo) {
    this.api.fetchRepositoryData(repo, (receivedResponse) => {
      this.data = receivedResponse;
    });
  }
  getRepoData () {
    return this.data;
  }
}
module.exports = Github;


// const GithubApi = require('./githubApi');
// const Github = require('./github');

// const api = new GithubApi();
// const github = new Github(api);

// github.fetch('sinatra/sinatra');

// github.getRepoData();