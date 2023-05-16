import { combineReducers, legacy_createStore as createStore } from 'redux';
import firstTaskReducer, {
    FirstTaskState,
    FirstTaskAction,
} from './first_task_reducer/firstTaskReducer';

type RootState = {
    firstTask: FirstTaskState;
    // Add other reducers here in the future
};

type RootAction = FirstTaskAction;
// Add other actions here in the future

const rootReducer = combineReducers<RootState>({
    firstTask: firstTaskReducer
});

const store = createStore(rootReducer);

export default store;
export type { RootState, RootAction };
