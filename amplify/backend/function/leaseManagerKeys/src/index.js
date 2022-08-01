/*
Use the following code to retrieve configured secrets from SSM:



const { Parameters } = await (new aws.SSM())
  .getParameters({
    Names: ["API_KEY","verifyTokenAPIURL","loginAPIURL","registerAPIURL"].map(secretName => process.env[secretName]),
    WithDecryption: true,
  })
  .promise();

Parameters will be of the form { Name: 'secretName', Value: 'secretValue', ... }[]
*/

const aws = require('aws-sdk'); 
/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
 exports.handler = async (event) => {
  const { Parameters } = await (new aws.SSM())
  .getParameters({
    Names: ["API_KEY","verifyTokenAPIURL","loginAPIURL","registerAPIURL"].map(secretName => process.env[secretName]),
    WithDecryption: true,
  })
  .promise();
const verifyTokenAPIURL = Parameters.pop().Value;
const registerAPIURL= Parameters.pop().Value;
const loginAPIURL = Parameters.pop().Value; 
const API_KEY = Parameters.pop().Value; 

const response = {
  statusCode: 200,
  verifyTokenAPIURL: verifyTokenAPIURL, 
  API_KEY: API_KEY, 
  registerAPIURL: registerAPIURL, 
  loginAPIURL: loginAPIURL
  
//  body: `verifyTokenAPIURL: ${verifyTokenAPIURL}`,
};

return response;
    
};

