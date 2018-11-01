import {ADD_PERSON, DELETE_PERSON} from './actions';
const initialState = {
    persons:[]
}
const reducer = (state=initialState, action) => {
    switch(action.type) {
        case ADD_PERSON:
        const newPerson = {
            id: Math.random(),
           ...action.person
        }
        return {
            persons:[newPerson, ...state.persons]
        }
        case DELETE_PERSON:
        return {
            persons:state.persons.filter(person=>person.id!==action.id)
        }
        default:
        return state
    }
}
export default reducer;