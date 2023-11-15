const addInvoice = [];

const addInvoices = (state = addInvoice, action) => {
  switch (action.type) {
    case 'ADDINV':
      return [...state, action.payload];

    default:
      return state;
  }
};

export default addInvoices;
