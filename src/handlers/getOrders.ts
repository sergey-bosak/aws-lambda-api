import AWS from 'aws-sdk';
const docClient = new AWS.DynamoDB.DocumentClient();

const getOrders = (orderId?: number | string) => {
  if (typeof orderId === 'undefined') {
    return docClient.scan({
      TableName: 'orders',
    })
    .promise()
    .then((result) => result.Items);
  }

  return docClient.get({
    TableName: 'orders',
    Key: {
      orderId: orderId,
    },
  })
  .promise()
  .then((result) => result.Item);
}

export default getOrders;