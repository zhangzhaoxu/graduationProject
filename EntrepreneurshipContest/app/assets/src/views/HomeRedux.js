import { combineReducers } from 'redux';

// 引入 reducer 及 actionCreator
import table from '../components/Home/TableRedux';
import modal from '../components/Home/ModalRedux';
import register from '../components/Register/RegisterRedux';

export default combineReducers({
    table,
    modal,
    register
});

export * as tableActions from '../components/Home/TableRedux';
export * as modalActions from '../components/Home/ModalRedux';
export * as registerActions from '../components/Register/RegisterRedux';

