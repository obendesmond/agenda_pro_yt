const initialState = {
  agendaList: [],
};

export const agendaReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_AGENDA_LIST_REQUEST":
      return { ...state, first_loading: true };
    case "GET_AGENDA_LIST_SUCCESS":
      return { ...state, first_loading: false, agendaList: action.payload };
    case "GET_AGENDA_LIST_FAIL":
      return { ...state, first_loading: false };

    case "ADD_AGENDA_REQUEST":
        return {...state, second_loading:true}
    case "ADD_AGENDA_SUCCESS":
        return { ...state, agendaList: [action.payload, ...state.agendaList], second_loading:false };
    case "ADD_AGENDA_FAIL":
        return {...state, second_loading:false}

    case "DELETE_AGENDA":
       return {...state, third_loading:true}
    case "DELETE_AGENDA_SUCCESS":
        const aList = [...state.agendaList]
        const newAList = aList.filter(agenda => agenda.id !== action.payload)
        return { ...state,third_loading:false, agendaList: newAList };
    case "DELETE_AGENDA_FAIL":
        return {...state, third_loading:false}

    default:
      return state;
  }
};

/**
 * 
 *
 * DELETE_AGENDA (id)
 *
 * UPDATE_AGENDA
 *
 * DELETE_ALL_AGENDA
 *
 */
