import { combineReducers } from 'redux';

import register from '../components/Register/RegisterRedux';
import homePersonal from './HomePersonalRedux';
import competitions from './CompetitionsRedux';
import forum from './ForumRedux';

export default combineReducers({
    register,
    competitions,
    homePersonal,
    forum
});

export * as registerActions from '../components/Register/RegisterRedux';
export * as homeActions from './HomePersonalRedux';
export * as competitionsActions from './CompetitionsRedux';
export * as forumActions from './ForumRedux';

