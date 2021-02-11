import AWS from 'aws-sdk';
const docClient = new AWS.DynamoDB.DocumentClient();

const updateOrder = (orderId, options) => {
  if (!orderId || !options) {
    throw new Error('Please provide orderId and updates');
  }

  return docClient.update({
    TableName: 'orders',
    Key: {
      orderId: orderId,
    },
    UpdateExpression: 'set item = :i, address=:a',
    ExpressionAttributeValues: {
      ':i': options.item,
      ':a': options.address,
    }
  })
  .promise()
  .then((result) => {
    return result.Attributes;
  })
  .catch((err) => {
    throw err;
  });
}

export default updateOrder;
