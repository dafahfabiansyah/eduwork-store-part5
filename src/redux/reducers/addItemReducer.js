// const addqty = [];

const addItemReducer = (state = [], action) => {
  switch (action.type) {
    case 'UPDATE_QUANTITY':
      return state.map((item) => (item.id === action.payload.id ? { ...item, quantity: action.payload.quantity } : item));
    default:
      return state;
  }
};

export default addItemReducer;
