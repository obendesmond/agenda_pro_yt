
import agendaListData from '../agendaListData';
import { v4 as uuidv4 } from "uuid";

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

        // include id to agenda if it doesn't exist
        const payload = agenda.id ? agenda : {...agenda, id:uuidv4()}

        dispatch({type:"ADD_AGENDA_SUCCESS", payload})
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

// update agenda
export const updateAgenda = (id) => dispatch => {
     try {
       dispatch({ type: "UPDATE_AGENDA_REQUEST" });
       // UPDATE agenda to db here
       dispatch({ type: "UPDATE_AGENDA_SUCCESS", payload: id });
     } catch (error) {
       dispatch({ type: "UPDATE_AGENDA_FAIL" });
       console.log(error);
     }
}

// deleteAll agenda
export const deleteAllAgenda = () => dispatch => {
     try {
       dispatch({ type: "DELETE_ALL_AGENDA_REQUEST" });
       // DELETE_ALL agenda to db here
       dispatch({ type: "DELETE_ALL_AGENDA_SUCCESS"});
     } catch (error) {
       dispatch({ type: "DELETE_ALL_AGENDA_FAIL" });
       console.log(error);
     }
}