
const initialState ={
    adults: 0,
    child: 0,
    babies: 0,
    arrival:'',
    departure:'',
    location:'',
    services: [],
    experiences:[],
}

export const formReducer= (state = initialState, action) => {
    switch (action.type){
        case 'INCREMENT_ADULTS_TICKET':{
            const newForm = {
                ...state,
                adults:state.adults+=1,
            }
            return newForm;

        };
        case 'DECREMENT_ADULTS_TICKET':{
            const newForm = {
                ...state,
                adults: state.adults>0?  state.adults-=1 : state.adults,
            }
            return newForm;
        };
        case 'INCREMENT_CHILD_TICKET':{
            const newForm = {
                ...state,
                child:state.child+=1,
            }
            return newForm;

        };
        case 'DECREMENT_CHILD_TICKET':{
            const newForm = {
                ...state,
                child: state.child>0?  state.child-=1 : state.child,
            }
            return newForm;
        };
        case 'INCREMENT_BABIES_TICKET':{
            const newForm = {
                ...state,
                babies:state.babies+=1,
            }
            return newForm;

        };
        case 'DECREMENT_BABIES_TICKET':{
            const newForm = {
                ...state,
                babies: state.babies>0?  state.babies-=1 : state.babies,
            }
            return newForm;
        };
        case 'SET_ARRIVAL_DATE':{
            const newForm = {
                ...state,
                arrival:action.payload,
            }
            return newForm;

        };
        case 'SET_DEPARTURE_DATE':{
            const newForm = {
                ...state,
                departure:action.payload,
            }
            return newForm;

        };
        case 'SET_LOCATION':{
            const newForm = {
                ...state,
                location:action.payload,
            }
            return newForm;

        };
        case 'LOAD_EXPERIENCE_DATA':{
            const newForm = {
                ...state,
                experiences:action.payload,
            }
            return newForm;

        };
        case 'LOAD_SERVICES_DATA':{
            const newForm = {
                ...state,
                services:action.payload,
            }
            return newForm;

        };
        default: return state;

    }
}