var AmazonCognitoIdentity = require('amazon-cognito-identity-js');


const funcs = {
  retrieveUser(){
    return new Promise((resolve, reject) => {
      var poolData = {
        UserPoolId: process.env.VUE_APP_AWS_COGNITO_USER_POOL_ID,
        ClientId: process.env.VUE_APP_AWS_COGNITO_USER_POOL_CLIENT_ID,
        Storage: new AmazonCognitoIdentity.CookieStorage({secure: false, domain: "localhost"})
      };

      var userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);

      var cognitoUser = userPool.getCurrentUser();

      if (cognitoUser != null) {
        cognitoUser.getSession(function(err, session) {
          if (err) {
            reject(err);
            return;
          }
          console.log('session validity: ' + session.isValid());
          //session.getSession()
          // NOTE: getSession must be called to authenticate user before calling getUserAttributes
          cognitoUser.getUserAttributes(function(err, attributes) {
            if (err) {
              reject(err);
            } else {
              resolve(attributes);
            }
          });
        });
      }else{
        reject('UsuarioNaoLogado');
      }
    });
  }
}

export default funcs