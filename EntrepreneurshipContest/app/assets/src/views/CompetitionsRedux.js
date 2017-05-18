import cloneDeep from 'lodash/cloneDeep';

const initialState = {
    loading: true,
    error: false,
    competitionsList: [],
    recommendList: []
};

const LOAD_COMPETITIONS = 'LOAD_COMPETITIONS';
const LOAD_COMPETITIONS_SUCCESS = 'LOAD_COMPETITIONS_SUCCESS';
const LOAD_COMPETITIONS_ERROR = 'LOAD_COMPETITIONS_ERROR';

const CHANGE_PAGE = "CHANGE_PAGE";
const CHANGE_PAGE_SUCCESS = "CHANGE_PAGE_SUCCESS";
const CHANGE_PAGE_ERROR = "CHANGE_PAGE_ERROR";

const LOAD_RECOMMENDS = 'LOAD_RECOMMENDS';
const LOAD_RECOMMENDS_SUCCESS = 'LOAD_RECOMMENDS_SUCCESS';
const LOAD_RECOMMENDS_ERROR = 'LOAD_RECOMMENDS_ERROR';

export function loadCompetitions(id) {
    return {
        types: [LOAD_COMPETITIONS, LOAD_COMPETITIONS_SUCCESS, LOAD_COMPETITIONS_ERROR],
        url: '/api/competitions.json'+'?id='+id
    };
}

export function loadRecommends() {
    return {
        types: [LOAD_RECOMMENDS, LOAD_RECOMMENDS_SUCCESS, LOAD_RECOMMENDS_ERROR],
        url: '/api/recommend.json'
    }
}

export function changePage(id) {
    return {
        types: [CHANGE_PAGE, CHANGE_PAGE_SUCCESS, CHANGE_PAGE_ERROR],
        url: '/api/changePage.json'+'?id='+id
    }
}

export default function previewCompetitions(state = initialState, action) {
    switch (action.type) {
        case LOAD_COMPETITIONS: {
            return {
                ...state,
                loading: true,
                error: false,
            };
        }
        
        case LOAD_COMPETITIONS_SUCCESS: {
            return {
                ...state,
                loading: false,
                error: false,
                competitionsList: action.payload.competitionsData
            };
        }
        
        case LOAD_COMPETITIONS_ERROR: {
            return {
                ...state,
                loading: false,
                error: true,
            };
        }
    
        case LOAD_RECOMMENDS: {
            return {
                ...state,
                loading: true,
                error: false,
            };
        }
    
        case LOAD_RECOMMENDS_SUCCESS: {
            return {
                ...state,
                loading: false,
                error: false,
                recommendList: action.payload.recommendData
            };
        }
    
        case LOAD_RECOMMENDS_ERROR: {
            return {
                ...state,
                loading: false,
                error: true,
            };
        }

        case CHANGE_PAGE: {
            return {
                ...state,
                loading: true,
                error: false,
            };
        }

        case CHANGE_PAGE_SUCCESS: {
            var id = parseInt(action.payload.id);
            var newState = cloneDeep(state);
            newState.competitionsList.competitionsData[id].competitionsData = action.payload.pageData.competitionsData;
            return {
                ...newState,
                loading: false,
                error: false,
            }
        }

        case CHANGE_PAGE_ERROR: {
            return {
                ...state,
                loading: false,
                error: true
            }
        }
        
        default:
            return state;
    }
}
