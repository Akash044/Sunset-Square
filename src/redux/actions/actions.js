

export const incrementAdultsTicket = (payload) => {
    return {
        type: 'INCREMENT_ADULTS_TICKET',
        payload: payload,
    }
}

export const decrementAdultsTicket = (payload) => {
    return { 
        type: 'DECREMENT_ADULTS_TICKET',
        payload: payload,
    }
}

export const incrementChildTicket = (payload) => {
    return {
        type: 'INCREMENT_CHILD_TICKET',
        payload: payload,
    }
}
export const decrementChildTicket = (payload) => {
    return { 
        type: 'DECREMENT_CHILD_TICKET',
        payload: payload,
    }
}

export const incrementBabiesTicket = (payload) => {
    return {
        type: 'INCREMENT_BABIES_TICKET',
        payload: payload,
    }
}
export const decrementBabiesTicket = (payload) => {
    return { 
        type: 'DECREMENT_BABIES_TICKET',
        payload: payload,
    }
}

export const setArrivalDate = (payload) => {
    return {
        type: 'SET_ARRIVAL_DATE',
        payload: payload,
    }
}
export const setDepartureDate = (payload) => {
    return { 
        type: 'SET_DEPARTURE_DATE',
        payload: payload,
    }
}
export const setLocation = (payload) => {
    return { 
        type: 'SET_LOCATION',
        payload: payload,
    }
}

export const setUserInfo = (payload) => {
    return { 
        type: 'SET_USER_INFO',
        payload: payload,
    }
}

export const loadSearchInfo = (payload) => {
    return { 
        type: 'LOAD_SEARCH_INFO',
        payload: payload,
    }
}

export const loadExperienceData = (payload) => {
    return { 
        type: 'LOAD_EXPERIENCE_DATA',
        payload: payload,
    }
}

export const middleware1 = (payload) =>{
    return (dispatch)=>{
        fetch("https://nameless-tundra-76042.herokuapp.com/experiences")
        .then(res => res.json())
        .then(data =>{
            dispatch(loadExperienceData(data))
        })
     }
}

export const middleware2 = (payload) =>{
    return (dispatch)=>{
        fetch("https://air-cnc-homes-api.herokuapp.com/homes")
        .then(res => res.json())
        .then(data =>{
            dispatch(loadSearchInfo(data))
        })
     }
}