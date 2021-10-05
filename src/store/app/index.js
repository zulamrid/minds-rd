

const initialState = {
    buttons: [],
    shapes: [],
    image: '',
    selected: '',
    image_shape: '',
    selected_shape: '',
    item: ''
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_BUTTON":
            return {
                ...state,
                buttons: [...state.buttons, action.payload]
            }
        case "UPDATE_BUTTON":
            return {
                ...state,
                buttons: state.buttons.map((v, index) =>
                    v.id === action.payload.index.id ? { ...v, ...action.payload.value } : v
                )
            }
        case "UPDATE_DETAIL":
            return {
                ...state,
                buttons: state.buttons.map((v, index) =>
                    v.id === action.payload.id ? { ...v, [action.payload.key]: action.payload.value } : v
                )
            }
        case "DELETE_BUTTON":
            return {
                ...state,
                buttons: state.buttons.filter((v, i) => i !== action.payload),
                selected: ''
            }
        case "SET_IMAGE": {
            return {
                ...state,
                image: action.payload
            }
        }
        case "SELECTED": {
            return {
                ...state,
                selected: action.payload,
                item: 'button'
            }
        }
        case "REMOVE_BUTTON":
            return {
                ...state,
            }
        case "EDIT_BUTTON":
            return {
                ...state
            }
        case "ADD_SHAPE":
            return {
                ...state,
                shapes: [...state.shapes, action.payload]
            }
        case "UPDATE_SHAPE":
            return {
                ...state,
                shapes: state.shapes.map((v, index) =>
                    v.id === action.payload.index.id ? { ...v, ...action.payload.value } : v
                )
            }
        case "UPDATE_DETAIL_SHAPE":
            return {
                ...state,
                shapes: state.shapes.map((v, index) =>
                    v.id === action.payload.id ? { ...v, [action.payload.key]: action.payload.value } : v
                )
            }
        case "DELETE_SHAPE":
            return {
                ...state,
                shapes: state.shapes.filter((v, i) => i !== action.payload),
                selected_shape: ''
            }
        case "SELECTED_SHAPE": {
            return {
                ...state,
                selected_shape: action.payload,
                item: 'shape'
            }
        }
        default:
            return state
    }
}

export default reducer;