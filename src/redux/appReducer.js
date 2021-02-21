import { SHOW_LOADER, HIDE_LOADER, OPEN_MODAL, CLOSE_MODAL } from './types';
const initialState = {
    loading: false
}
export const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_LOADER:
            return { ...state, loading: true }
        case HIDE_LOADER:
            return { ...state, loading: false }
        case OPEN_MODAL:
            return { ...state, isModal: true }
        case CLOSE_MODAL:
            return { ...state, isModal: false }
        default: return state
    }
}