import { SET_CONT_ACT } from "../../utils/consts"

export const setContentAct = (publication) => {
    return {
        type: SET_CONT_ACT,
        payload: publication,
    }
}