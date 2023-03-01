const initialState = {
    agendaList:[],
}

export const agendaReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_AGENDA_LIST_REQUEST":
           return {...state, first_loading:true}
        case "GET_AGENDA_LIST_SUCCESS":
           return {...state, first_loading:false, agendaList:action.payload}
        case "GET_AGENDA_LIST_FAIL":
           return {...state, first_loading:false}
    
        default:
            return state
    }
}
/**
 * GET_AGENDA_LIST (request, success, fail)
 * 
 * ADD_AGENDA{request, success, failed}
 * 
 * DELETE_AGENDA 
 * 
 * UPDATE_AGENDA
 * 
 * DELETE_ALL_AGENDA
 * 
 */