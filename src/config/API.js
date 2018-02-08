import axios from "axios";

const base = 'http://mdi.herokuapp.com/';

class API {  
  get = (endpoint) => {
    axios.get(base + endpoint)
        .then(function (response) {
        console.log(response);
  })
    .catch(function (error) {
        console.log(error);
  });
  }
}

export default new API();