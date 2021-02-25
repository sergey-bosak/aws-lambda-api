import AWSXRay from 'aws-xray-sdk-core';
import { v4 as uuid } from 'uuid';
const CapturedAWS = AWSXRay.captureAWS(require('aws-sdk'));
const docClient = new CapturedAWS.DynamoDB.DocumentClient();

const createOrder = (req) => {
  const userData = req.context.authorizer.claims;
  console.log('User data', userData);

  let userAddress = req.body && req.body.address;
  if (!userAddress) {
    userAddress = JSON.parse(userData.address).formatted;
  }

  if (!req.body || !req.body.item || !req.body.address) {
    throw new Error('Please provide item and address');
  }

  return docClient.put({
    TableName: 'orders',
    Item: {
      cognitoUsername: userAddress['cognito:username'],
      orderId: uuid(),
      item: req.item,
      address: userAddress,
      orderStatus: 'pending',
    },
  })
    .promise()
    .then((res) => {
      console.log(res);
      return res;
    })
    .catch((saveError) => {
      throw saveError;
    });
}

export default createOrder;
