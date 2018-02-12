import request from "superagent";
const base = "http://mdi.herokuapp.com/";

class API {
  get = endpoint => {
    return request.get(base + endpoint).retry();
  };
}

export default new API();
