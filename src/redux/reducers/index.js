import addItem from './addItem';
import addInvoices from './addInvoice';
import { combineReducers } from 'redux';

const rootReducers = combineReducers({
  addItem,
  addInvoices,
});

export default rootReducers;
