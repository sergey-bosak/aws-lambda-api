import AWS from 'aws-sdk';
const docClient = new AWS.DynamoDB.DocumentClient();

const deleteOrder = (orderId) => {
  return docClient.delete({
    TableName: 'orders',
    Key: {
      orderId: orderId,
    },
  })
  .promise()
  .then((result) => {
    return result;
  })
  .catch((err) => {
    throw err;
  });
}

export default deleteOrder;
