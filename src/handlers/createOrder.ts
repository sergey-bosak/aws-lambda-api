import AWS from 'aws-sdk';
const docClient = new AWS.DynamoDB.DocumentClient();

const createOrder = (req) => {
  if (!req || !req.id || !req.address) {
    throw new Error('To order item you need to provide address and item id');
  }

  return docClient.put({
    TableName: 'orders',
    Item: {
      orderId: 'some-id',
      item: req.item,
      address: req.address,
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
