import { combineReducers } from 'redux';

import register from '../components/Register/RegisterRedux';
import homeMain from '../components/Home/MainRedux';
import homeTabs from '../components/Home/TabsWrapperRedux';
import competitions from './CompetitionsRedux';

export default combineReducers({
    register,
    homeMain,
    homeTabs,
    competitions
});

export * as registerActions from '../components/Register/RegisterRedux';
export * as homeMainActions from '../components/Home/MainRedux';
export * as homeTabsActions from '../components/Home/TabsWrapperRedux';
export * as competitionsActions from './CompetitionsRedux';

