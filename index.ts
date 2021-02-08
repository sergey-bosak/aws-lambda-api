const Api = require('claudia-api-builder');
const api = new Api();

api.get('/houseItems', () => {
  return [
    {
      id: 1,
      name: 'House Item 1',
      image: 'url image 1',
      description: 'Description 1',
    },
    {
      id: 2,
      name: 'House Item 2',
      image: 'url image 2',
      description: 'Description 2',
    },
    {
      id: 3,
      name: 'House Item 3',
      image: 'url image 3',
      description: 'Description 3',
    }
  ];
});

module.exports = api;