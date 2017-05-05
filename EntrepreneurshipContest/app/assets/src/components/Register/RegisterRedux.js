import defaultImg from '../../../../static/default.png';

const initialState = {
    logged: true,
    headPorhtrait: defaultImg,
    message: 0
};

const LOG_OUT = "LOG_OUT";
const LOG_IN = "LOG_IN";

export function logIn() {
    return {
        types: LOG_IN
    };
}

export function logOut() {
    return {
        types: LOG_OUT
    }
}


export default function register(state = initialState, action) {
    switch (action.type) {
        case LOG_OUT: {
            return {
                ...state,
                logged: false,
                headPorhtrait: defaultImg,
                message: 0
            };
        }

        case LOG_IN: {
            return {
                ...state,
                logged: true,
                headPorhtrait: defaultImg,
                message: 5
            }
        }
        
        default:
            return state;
    }
}
