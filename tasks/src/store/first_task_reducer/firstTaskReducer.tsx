const SET_TEXT: string = 'SET_TEXT';

type FirstTaskState = {
    mainText: string;
};

type ChangeTextAction = {
    type: typeof SET_TEXT;
    payload: string;
};

type FirstTaskAction = ChangeTextAction;

const initialStore: FirstTaskState = {
    mainText: 'hello world'
};

const firstTaskReducer = (state = initialStore, action: FirstTaskAction): FirstTaskState => {
    switch (action.type) {
        case SET_TEXT: {
            return {
                ...state,
                mainText: action.payload,
            };
        }
        default:
            return state;
    }
};

export const setMainTextAC = (payload: string): ChangeTextAction => ({ type: SET_TEXT, payload });

export default firstTaskReducer;
export type { FirstTaskState, FirstTaskAction };