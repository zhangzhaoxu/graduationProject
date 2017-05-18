
const initialState = {
    loading: true,
    error: false,
    selectionList: [],
    postList: []
};

const LOAD_SELECTIONS = 'LOAD_SELECTIONS';
const LOAD_SELECTIONS_SUCCESS = 'LOAD_SELECTIONS_SUCCESS';
const LOAD_SELECTIONS_ERROR = 'LOAD_SELECTIONS_ERROR';

const SELECTION_CHANGE = 'SELECTION_CHANGE';
const SELECTION_CHANGE_SUCCESS = 'SELECTION_CHANGE_SUCCESS';
const SELECTION_CHANGE_ERROR = 'SELECTION_CHANGE_ERROR';

const PAGE_CHANGE = 'PAGE_CHANGE';
const PAGE_CHANGE_SUCCESS = 'PAGE_CHANGE_SUCCESS';
const PAGE_CHANGE_ERROR = 'PAGE_CHANGE_ERROR';

const LOAD_POSTS = 'LOAD_POSTS';
const LOAD_POSTS_SUCCESS = 'LOAD_POSTS_SUCCESS';
const LOAD_POSTS_ERROR = 'LOAD_POSTS_ERROR';

export function loadSelections() {
    return {
        types: [LOAD_SELECTIONS, LOAD_SELECTIONS_SUCCESS, LOAD_SELECTIONS_ERROR],
        url: '/api/selections.json'
    };
}

export function loadPosts() {
    return {
        types: [LOAD_POSTS, LOAD_POSTS_SUCCESS, LOAD_POSTS_ERROR],
        url: '/api/posts.json'
    }
}

export function selectionChange() {
    return {
        types: [SELECTION_CHANGE, SELECTION_CHANGE_SUCCESS, SELECTION_CHANGE_ERROR],
        url: '/api/selectionChange.json'
    }
}

export function pageChange() {
    return {
        types: [PAGE_CHANGE, PAGE_CHANGE_SUCCESS, PAGE_CHANGE_ERROR],
        url: '/api/postPageChange.json'
    }
}

export default function preview(state = initialState, action) {
    switch (action.type) {
        case LOAD_SELECTIONS: {
            return {
                ...state,
                loading: true,
                error: false
            };
        }
        
        case LOAD_SELECTIONS_SUCCESS: {
            console.log(action.payload.selectionData)
            return {
                ...state,
                loading: false,
                error: false,
                selectionList: action.payload.selectionData
            };
        }
        
        case LOAD_SELECTIONS_ERROR: {
            return {
                ...state,
                loading: false,
                error: true
            };
        }
        
        case LOAD_POSTS: {
            return {
                ...state,
                loading: true,
                error: false
            };
        }
        
        case LOAD_POSTS_SUCCESS: {
            return {
                ...state,
                loading: false,
                error: false,
                postList: action.payload.postData
            };
        }
        
        case LOAD_POSTS_ERROR: {
            return {
                ...state,
                loading: false,
                error: true
            };
        }
    
        case SELECTION_CHANGE: {
            return {
                ...state,
                loading: true,
                error: false
            };
        }
    
        case SELECTION_CHANGE_SUCCESS: {
            return {
                ...state,
                loading: false,
                error: false,
                postList: action.payload.postData
            };
        }
    
        case SELECTION_CHANGE_ERROR: {
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
                postList: action.payload.postData
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
