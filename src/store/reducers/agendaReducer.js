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
        const payL = action.payload
        const agendaEl = state.agendaList.find(el => el.id === payL.id)

        if(agendaEl){
            agendaEl.subject = payL.subject
            agendaEl.time = payL.time
            agendaEl.location = payL.location
            agendaEl.description = payL.description
            // loop through agenda list and substitude old agenda with new one
            const updateList = [...state.agendaList].map(el => {
                if(el.id === agendaEl.id) el = agendaEl
                return el
            })

            return {...state, second_loading:false, agendaList:updateList, currentAgendaEdit:{}}
        } else {
            return { ...state, agendaList: [payL, ...state.agendaList], second_loading:false, currentAgendaEdit:{} };
        }

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

    case "UPDATE_AGENDA_REQUEST":
        return {...state, fourth_loading:true}
    case "UPDATE_AGENDA_SUCCESS":
        const aList2 = [...state.agendaList];
        const newAList2 = aList2.filter(agenda => agenda.id === action.payload);
        return {...state, fourth_loading:false, currentAgendaEdit:newAList2[0]}
    case "UPDATE_AGENDA_FAIL":
        return {...state, fourth_loading:false}

    default:
      return state;
  }
};

/**
 *
 * UPDATE_AGENDA (id)
 *
 * DELETE_ALL_AGENDA
 *
 */
