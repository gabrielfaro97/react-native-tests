import API from "./../config/API";

export default {
  _requests: [],
  _fetched: {},
  _list: [],

  getUsers(callback) {
    API.get("api/users").end((err, res) => {
      if (!!err) {
        if (!res) {
          console.log(res);
          console.log(err);
          console.log("Servidor inacessível");
        } else {
          console.log(err);
        }
      } else {
        callback(res.body);
      }
    });
  },

  saveUser(
    merchantId,
    realm,
    username,
    email,
    emailVerified,
    id,
    createdAt,
    updatedAt
  ) {
    console.log(
      JSON.stringify({
        merchantId: merchantId,
        realm: realm,
        username: username,
        email: email,
        emailVerified: emailVerified,
        id: id,
        createdAt: createdAt,
        updatedAt: updatedAt
      })
    );
    API.put("api/users")
      .send({
        merchantId: merchantId,
        realm: realm,
        username: username,
        email: email,
        emailVerified: emailVerified,
        id: id,
        createdAt: createdAt,
        updatedAt: updatedAt
      })
      .end((err, res) => {
        if (!!err) {
          if (!res) {
            console.log(res);
            console.log(err);
            console.log("Servidor inacessível");
          } else {
            console.log(err);
          }
        } else {
          callback(res.body);
        }
      });
  }
};
