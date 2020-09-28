import axios from "axios";
const BASEURL = "https://randomuser.me/?t=";
const APIKEY = "&apikey=results";

export default {
  search: function(query) {
    return axios.get(BASEURL + query + APIKEY);
  }
};
