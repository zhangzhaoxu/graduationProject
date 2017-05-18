import defaultImg from '../../../../static/xiaoxin.jpg';

const initialState = {
    logged: false,
    headPorhtrait: defaultImg,
    message: 0
};

const LOG_IN = "LOG_IN";
const LOGIN_SUCCESS = "LOGIN_SUCCESS";
const LOGIN_ERROR = "LOGIN_ERROR";

const LOG_OUT = "LOG_OUT";
const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
const LOGOUT_ERROR = "LOGOUT_ERROR";


export function logIn() {
    return {
        url: '/logIn',
        types: ["LOGIN", "LOGIN_SUCCESS", "LOGIN_ERROR"]
    };
}

export function logOut() {
    return {
        url: '/logOut',
        types: ["LOGOUT", "LOGOUT_SUCCESS", "LOGIN_ERROR"]
    }
}


export default function register(state = initialState, action) {
    switch (action.type) {
        case LOG_IN: {
            return {
                ...state,
                ...state,
                logged: true,
                headPorhtrait: defaultImg,
                message: 5
            }
        }

        case LOGIN_SUCCESS: {
            return {
                ...state,
                logged: true,
                headPorhtrait: defaultImg,
                message: 5
            }
        }

        case LOGIN_ERROR: {
            return {
                ...state,
                logged: false,
                headPorhtrait: defaultImg,
                message: 0
            }
        }
        case LOG_OUT: {
            return {
                ...state,
                logged: true,
                headPorhtrait: defaultImg,
                message: 5
            };
        }
        case LOGOUT_SUCCESS: {
            return {
                ...state,
                logged: false,
                headPorhtrait: defaultImg,
                message: 0
            }
        }
        case LOGOUT_ERROR: {
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
