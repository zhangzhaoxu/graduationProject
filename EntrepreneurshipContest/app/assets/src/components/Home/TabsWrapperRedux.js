const initialState = {
    loading: true,
    error: false,
    tabsList: [],
};

const LOAD_TABS = 'LOAD_TABS';
const LOAD_TABS_SUCCESS = 'LOAD_TABS_SUCCESS';
const LOAD_TABS_ERROR = 'LOAD_TABS_ERROR';

export function loadtabs() {
    return {
        types: [LOAD_TABS, LOAD_TABS_SUCCESS, LOAD_TABS_ERROR],
        url: '/api/homeTabs.json'
    };
}

export default function previewTabs(state = initialState, action) {
    switch (action.type) {
        case LOAD_TABS: {
            return {
                ...state,
                loading: true,
                error: false,
            };
        }
        
        case LOAD_TABS_SUCCESS: {
            return {
                ...state,
                loading: false,
                error: false,
                TABSList: action.tabsData,
            };
        }
        
        case LOAD_TABS_ERROR: {
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
