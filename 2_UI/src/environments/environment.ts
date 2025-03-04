export const environment = {

  production: true,

  // TODO: make sure you have the correct region
  region: 'eu-west-1',


  // TODO: This id can be retrieved in output section of the cognito ui
  // cloud formation stack.
  cognitoIdentityPoolId: 'eu-west-1:2c53e814-2c25-4ce9-9c39-a96769c462da',

  // TODO: Facebook app id can be retrieved from the application in your
  // facebook developer account.
  facebookAppId: '929902708321511',

  // TODO: The API URL is available in the API Gateway console under Stage
  // NOTE: don't forget trailing "/"  For example:
  // https://api.example.com/prod/
  ticketAPI: 'https://api.hockeyanalytics.net/'

};
