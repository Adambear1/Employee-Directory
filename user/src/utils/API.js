import axios from "axios";

export default {
  default: function () {
    return axios.get("https://randomuser.me/api/?results=10&nat=u");
  },
  country: function (country) {
    return axios.get("https://restcountries.eu/rest/v2/name/" + country);
  },
};
