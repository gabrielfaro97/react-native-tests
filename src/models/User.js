import API from "./../config/API";

export default {

  getUsers() {
    API.get('api/users')
  },

};
