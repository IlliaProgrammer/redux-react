import { CREATE_CONT_ACT, publicationsData, SET_CONT_ACT } from "../../utils/consts";

const initialState = {
    content: publicationsData,
}


const ContentReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_CONT_ACT: {
            return state;
        }
         
        case CREATE_CONT_ACT: {
            return {
              ...state,
              content: state.content 
                ? [...state.content, action.payload]
                : [action.payload]
            };
          }
        default: {
            return initialState;
        }
    }
}

export default ContentReducer
