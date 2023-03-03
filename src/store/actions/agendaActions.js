
import agendaListData from '../agendaListData';

// get all agenda
export const getAllAgenda = () => dispatch => {
    try {
        dispatch({type:"GET_AGENDA_LIST_REQUEST"})

        // go to backend and get agenda list
        const agendaList = agendaListData
        
        dispatch({type:"GET_AGENDA_LIST_SUCCESS",payload:agendaList})
    } catch (error) {
        dispatch({type:"GET_AGENDA_LIST_FAIL"})
        console.log(error)
    }
}

// add new agenda
export const addAgenda = (agenda) => dispatch => {
    try {
        dispatch({type:"ADD_AGENDA_REQUEST"})
        // add agenda to db here
        dispatch({type:"ADD_AGENDA_SUCCESS", payload:agenda})
    } catch (error) {
        dispatch({ type: "ADD_AGENDA_FAIL" });
        console.log(error);
    }
}

// delete agenda
export const deleteAgenda = (id) => dispatch => {
    try {
        dispatch({type:"DELETE_AGENDA_REQUEST"})
        // go to db and delete agenda with id
        dispatch({type:"DELETE_AGENDA_SUCCESS",payload:id})
    } catch (error) {
        dispatch({ type: "DELETE_AGENDA_FAIL" });
        console.log(error);
    }
}