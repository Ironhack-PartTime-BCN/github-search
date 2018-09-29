import axios from 'axios';

const BASEAPI = 'https://api.github.com/';

class GithubApi {
  getUsers(value) {
    return axios.get(`${BASEAPI}search/users?q=${value}+in:login`)
  }
}

export const githubApi = new GithubApi();