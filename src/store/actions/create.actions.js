import { CREATE_CONT_ACT } from "../../utils/consts"

export const createContAct = (publication) => {
    return {
        type: CREATE_CONT_ACT,
        payload: publication,
    }
}