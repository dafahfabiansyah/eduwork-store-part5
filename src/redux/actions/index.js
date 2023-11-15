export const addItem = (product) => {
  return {
    type: 'ADDITEM',
    payload: product,
  };
};

export const delItem = (product) => {
  return {
    type: 'DELITEM',
    payload: product,
  };
};

export const addinv = (product) => {
  return {
    type: 'ADDINV',
    payload: product,
  };
};
