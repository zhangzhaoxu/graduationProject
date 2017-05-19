
const initialState = {
    loading: true,
    error: false,
    answerList: []
};

const PAGE_CHANGE = 'PAGE_CHANGE';
const PAGE_CHANGE_SUCCESS = 'PAGE_CHANGE_SUCCESS';
const PAGE_CHANGE_ERROR = 'PAGE_CHANGE_ERROR';

const LOAD_ANSWERS = 'LOAD_ANSWERS';
const LOAD_ANSWERS_SUCCESS = 'LOAD_ANSWERS_SUCCESS';
const LOAD_ANSWERS_ERROR = 'LOAD_ANSWERS_ERROR';

export function loadAnswers() {
    return {
        types: [LOAD_ANSWERS, LOAD_ANSWERS_SUCCESS, LOAD_ANSWERS_ERROR],
        url: '/api/postAnswers.json'
    }
}

export function pageChange() {
    return {
        types: [PAGE_CHANGE, PAGE_CHANGE_SUCCESS, PAGE_CHANGE_ERROR],
        url: '/api/postAnswersChange.json'
    }
}

export default function preview(state = initialState, action) {
    switch (action.type) {

        case LOAD_ANSWERS: {
            return {
                ...state,
                loading: true,
                error: false
            };
        }

        case LOAD_ANSWERS_SUCCESS: {
            return {
                ...state,
                loading: false,
                error: false,
                answerList: action.payload.answerList
            };
        }

        case LOAD_ANSWERS_ERROR: {
            return {
                ...state,
                loading: false,
                error: true
            };
        }

        case PAGE_CHANGE: {
            return {
                ...state,
                loading: true,
                error: false
            };
        }

        case PAGE_CHANGE_SUCCESS: {
            return {
                ...state,
                loading: false,
                error: false,
                answerList: action.payload.answerList
            };
        }

        case PAGE_CHANGE_ERROR: {
            return {
                ...state,
                loading: false,
                error: true
            };
        }

        default:
            return state;
    }
}
