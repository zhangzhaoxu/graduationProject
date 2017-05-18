
const initialState = {
    loading: true,
    error: false,
    newsList: [],
    tabsList: []
};

const LOAD_NEWS_LIST = 'LOAD_NEWS_LIST';
const LOAD_NEWS_LIST_SUCCESS = 'LOAD_NEWS_LIST_SUCCESS';
const LOAD_NEWS_LIST_ERROR = 'LOAD_NEWS_LIST_ERROR';

const LOAD_TABS_LIST = 'LOAD_TABS_LIST';
const LOAD_TABS_LIST_SUCCESS = 'LOAD_TABS_LIST_SUCCESS';
const LOAD_TABS_LIST_ERROR = 'LOAD_TABS_LIST_ERROR';


export function loadNewsList() {
    return {
        types: [LOAD_NEWS_LIST, LOAD_NEWS_LIST_SUCCESS, LOAD_NEWS_LIST_ERROR],
        url: '/api/newsList.json'
    };
}

export function loadTabsList() {
    return {
        types: [LOAD_TABS_LIST, LOAD_TABS_LIST_SUCCESS, LOAD_TABS_LIST_ERROR],
        url: '/api/tabsList.json'
    }
}

export default function previewHome(state = initialState, action) {
    switch (action.type) {
        case LOAD_NEWS_LIST: {
            return {
                ...state,
                loading: true,
                error: false,
            };
        }
        
        case LOAD_NEWS_LIST_SUCCESS: {
            return {
                ...state,
                loading: false,
                error: false,
                newsList: action.payload.newsList
            };
        }
        
        case LOAD_NEWS_LIST_ERROR: {
            return {
                ...state,
                loading: false,
                error: true,
            };
        }
        case LOAD_TABS_LIST: {
            return {
                ...state,
                loading: true,
                error: false,
            };
        }

        case LOAD_TABS_LIST_SUCCESS: {
            return {
                ...state,
                loading: false,
                error: false,
                tabsList: action.payload.tabsList
            };
        }

        case LOAD_TABS_LIST_ERROR: {
            return {
                ...state,
                loading: false,
                error: true,
            };
        }
            
        default:
            return state;
    }
}
