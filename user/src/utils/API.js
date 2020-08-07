import axios from "axios";

export default {
  default: function () {
    return axios.get("https://randomuser.me/api/?results=12&nat=u");
  },
};
