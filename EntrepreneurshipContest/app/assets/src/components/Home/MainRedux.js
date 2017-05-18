const initialState = {
    loading: true,
    error: false,
    newsList: [],
};

const LOAD_NEWS = 'LOAD_NEWS';
const LOAD_NEWS_SUCCESS = 'LOAD_NEWS_SUCCESS';
const LOAD_NEWS_ERROR = 'LOAD_NEWS_ERROR';

export function loadNEWS() {
    return {
        types: [LOAD_NEWS, LOAD_NEWS_SUCCESS, LOAD_NEWS_ERROR],
        url: '/api/news.json'
    };
}

export default function previewNews(state = initialState, action) {
    switch (action.type) {
        case LOAD_NEWS: {
            return {
                ...state,
                loading: true,
                error: false,
            };
        }

        case LOAD_NEWS_SUCCESS: {
            return {
                ...state,
                loading: false,
                error: false,
                newsList: action.newsData,
            };
        }

        case LOAD_NEWS_ERROR: {
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
