const updateOrder = (orderId, updates) => {
  if (!orderId || !updates) {
    throw new Error('Please provide orderId and updates');
  }

  return `New item is -- ${updates}`;
}

export default updateOrder;
