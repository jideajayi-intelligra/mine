import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';
import { ActionTypes } from '../constants/action-typess';


const reducers = combineReducers({

})

const rootReducer = (state, action) => {
    if (action.type === ActionTypes.LOG_OUT_USER) {
        // for all keys defined in your persistConfig(s)
        storage.removeItem('persist:root')
        // storage.removeItem('persist:otherKey')

        state = undefined;
    }
    return reducers(state, action);
};

export default rootReducer;
