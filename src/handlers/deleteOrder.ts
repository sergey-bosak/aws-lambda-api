const deleteOrder = (orderId) => {
  if (!orderId) {
    throw new Error('Please provide orderId');
  }

  return {};
}

export default deleteOrder;
