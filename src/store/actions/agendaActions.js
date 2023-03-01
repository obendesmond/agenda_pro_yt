
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