import API from "./../config/API";

export default {

  _requests: [],
  _fetched: {},
  _list: [],

  getUsers(callback) {
    API.get('api/users')
            .end((err, res) => {
                if (!!err) {
                    if (!res) {
                        console.dir(res);
                        console.dir(err);
                        console.log("Servidor inacessível");
                    } else {
                        console.dir(err);
                    }
                } else {
                    callback(res.body);
                }
            });
  },

};
