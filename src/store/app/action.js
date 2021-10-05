import { v4 as uuidv4 } from 'uuid';

export const addButton = () => {
    return (dispatch) => {
        const payload = {
            x: 10,
            y: 10,
            width: 180,
            height: 80,
            name: 'label1',
            fill: '#0984e3',
            opacity: 1,
            stroke: 'black',
            strokeWidth: 0,
            id: uuidv4(),
            cornerRadius: [0, 0, 0, 0],
        }
        dispatch({
            type: 'ADD_BUTTON',
            payload
        })
    }
}

export const updateButton = (index, v) => {
    return (dispatch) => {
        const payload = {
            index,
            value: v
        }

        console.log(payload)

        dispatch({
            type: 'UPDATE_BUTTON',
            payload
        })
    }
}

export const selected = (payload) => {
    return (dispatch) => {
        dispatch({
            type: 'SELECTED',
            payload
        })
    }
}

export const setImage = (payload) => {
    return (dispatch) => {
        console.log(payload)
        dispatch({
            type: 'SET_IMAGE',
            payload
        })
    }
}

export const updateDetail = (payload) => {
    return (dispatch) => {
        console.log(payload)
        dispatch({
            type: 'UPDATE_DETAIL',
            payload
        })
    }
}

export const updateBorderRadius = (v) => {
    return (dispatch) => {
        console.log(v)
        const payload = {
            id: v.id,
            key: v.key,
            index: v.index,
            value: [
                v.indexborder === 0 ? v.value : v.datas[0],
                v.indexborder === 1 ? v.value : v.datas[1],
                v.indexborder === 2 ? v.value : v.datas[2],
                v.indexborder === 3 ? v.value : v.datas[3],
                ]
        }
        dispatch({
            type: 'UPDATE_BORDER_RADIUS',
            payload
        })
    }
}

export const addShape = () => {
    return (dispatch) => {
        const payload = {
            x: 10,
            y: 10,
            width: 200,
            height: 200,
            label: 'shape1',
            fill: '#0984e3',
            opacity: 0.5,
            radius: 10,
            radius: 70,
            fill: 'red',
            stroke: 'black',
            strokeWidth: 4,
            // shadowColor: 'black',
            // shadowBlur: 10,
            // shadowOffset: { x: 10, y: 10 },
            // shadowOpacity: 0.5,
            id: uuidv4(),
        }
        dispatch({
            type: 'ADD_SHAPE',
            payload
        })
    }
}

export const updateShape = (index, v) => {
    return (dispatch) => {
        const payload = {
            index,
            value: v
        }

        console.log(payload)

        dispatch({
            type: 'UPDATE_SHAPE',
            payload
        })
    }
}

export const selectedShape = (payload) => {
    return (dispatch) => {
        dispatch({
            type: 'SELECTED_SHAPE',
            payload
        })
    }
}

export const setImageShape = (payload) => {
    return (dispatch) => {
        console.log(payload)
        dispatch({
            type: 'SET_IMAGE_SHAPE',
            payload
        })
    }
}

export const updateDetailShape = (payload) => {
    return (dispatch) => {
        console.log(payload)
        dispatch({
            type: 'UPDATE_DETAIL_SHAPE',
            payload
        })
    }
}

export const deleteItem = (payload) => {
    return(dispacth) => {
        console.log(payload)
        if(payload.item === 'button'){
            dispacth({
                type: 'DELETE_BUTTON',
                payload: payload.selectedButton
            })
        }else{
            dispacth({
                type: 'DELETE_SHAPE',
                payload: payload.selectedShape
            })
        }
    }
}

