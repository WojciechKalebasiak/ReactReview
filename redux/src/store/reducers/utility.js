export const updateState = (state, newProperty) => {
    return {
        ...state,
        ...newProperty
    }
}