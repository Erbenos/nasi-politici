import { SET_SEARCH_QUERY, SET_SEARCH_RESULTS, RESET_SEARCH_QUERY, SearchState, SearchActionTypes } from './types'

const initialState: SearchState = {
  query: '',
  results: [],
  wasSearched: false,
}

export function searchReducer(state = initialState, action: SearchActionTypes): SearchState {
  switch (action.type) {
    case SET_SEARCH_QUERY: {
      return {
        ...state,
        query: action.payload,
      }
    }
    case SET_SEARCH_RESULTS: {
      return {
        ...state,
        ...action.payload,
      }
    }
    case RESET_SEARCH_QUERY: {
      return {
        ...initialState,
      }
    }
    default:
      return state
  }
}
