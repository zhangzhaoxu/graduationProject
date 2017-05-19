import { combineReducers } from 'redux';

import register from '../components/Register/RegisterRedux';
import homePersonal from './HomePersonalRedux';
import competitions from './CompetitionsRedux';
import forum from './ForumRedux';
import post from './PostRedux';

export default combineReducers({
    register,
    competitions,
    homePersonal,
    forum,
    post
});

export * as registerActions from '../components/Register/RegisterRedux';
export * as homeActions from './HomePersonalRedux';
export * as competitionsActions from './CompetitionsRedux';
export * as forumActions from './ForumRedux';
export * as postActions from './PostRedux';

