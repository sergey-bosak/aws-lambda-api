import ApiBuilder from 'claudia-api-builder';
const api : any = new ApiBuilder();
import getHouseItems from './handlers/getHouseItems';
import createOrder from './handlers/createOrder';
import updateOrder from './handlers/updateOrder';
import deleteOrder from './handlers/deleteOrder';
import getOrders from './handlers/getOrders';

api.get('/', () => 'yo welcome!');

api.get('/houseItems', () => {
  return getHouseItems();
}, {
  error: 404,
});

api.get('/houseItems/{id}',(req) => {
  return getHouseItems(req.pathParams.id);
}, {
  success: 200,
  error: 404,
});

api.post('/orders', (req) => {
  return createOrder(req.body);
}, {
  success: 201,
  error: 400,
});

api.put('/orders/{id}', (req) => {
  return updateOrder(req.pathParams.id, req.body);
}, {
  success: 200,
  error: 400,
});

api.delete('/order/{id}', (req) => {
  return deleteOrder(req.pathParams.id);
}, {
  success: 200,
  error: 400,
});

api.get('/orders', () => {
  return getOrders();
}, {
  success: 200,
  error: 404,
});


api.get('/orders/{id}', (req) => {
  return getOrders(req.pathParams.id);
}, {
  success: 200,
  error: 404,
});

module.exports = api;