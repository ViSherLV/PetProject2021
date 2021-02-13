import { FETCH_POSTS } from './types'
const initialState ={
    posts:[]
}
export const postReducer = (state = initialState, action) => {
    const {payload} = action
    switch(action.type){
        case FETCH_POSTS:
            return {...state, posts: payload}
        default: return state;
    }
}