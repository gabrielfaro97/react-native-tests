import request from "superagent";
const base = "http://mdi.herokuapp.com/";

class API {
  get = endpoint => {
    return request.get(base + endpoint).retry();
  };

  put = endpoint => {
    return request.put(base + endpoint).retry();
  };
}

export default new API();
