import houseItems from '../data/houseItems';

const getHouseItems = (houseItemId?: number) => {
  if (!houseItemId) {
    return houseItems;
  }

  const houseItem = houseItems.find((item) => {
    return item.id == houseItemId;
  })

  if (houseItem) {
    return houseItem;
  }

  throw new Error('The house item you requested was not found');
};

export default getHouseItems;
