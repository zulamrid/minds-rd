import React from 'react';
import './index.css';
import { useSelector, useDispatch } from 'react-redux';
import { SketchPicker } from 'react-color';
import { updateDetail } from '../../../store/app/action';


export default function Index() {

    const dispatch = useDispatch()
    const selected = useSelector(state => state.Main.selected)
    const buttons = useSelector(state => state.Main.buttons)
    const [displayColor, setDisplayColor] = React.useState(false)

    React.useEffect(() => {
        console.log(selected)
    }, [buttons])

    const showDisplay = () => {
        setDisplayColor(!displayColor)
    }

    const changeDetail = (index, key, value, id) => {
        const payload = {
            index,
            key,
            value,
            id
        }

        setTimeout(() => dispatch(updateDetail(payload)), 1000)

    }

    const popover = {
        position: 'absolute',
        zIndex: '2',
    }
    const cover = {
        position: 'fixed',
        top: '0px',
        right: '0px',
        bottom: '0px',
        left: '0px',
    }

    return (
        <div className="sidebar-right">
            {buttons.length !== 0 ? selected !== '' ?
                <table>
                    <tr>
                        <td>x</td>
                        <td> y </td>

                    </tr>
                    <tr>
                        <td>
                            <input
                                defaultValue={buttons[selected].y}
                                onChange={e => changeDetail(selected, 'y', e.target.value, buttons[selected].id)}
                            />
                        </td>
                        <td>
                            <input
                                type="text"
                                name="any2"
                                defaultValue={buttons[selected].x}
                                onChange={e => changeDetail(selected, 'x', e.target.value, buttons[selected].id)}
                            /></td>
                    </tr>
                    <tr>
                        <td>Width</td>
                        <td>Height</td>
                        
                    </tr>
                    <tr>
                        <td>
                            <input
                                defaultValue={buttons[selected].height}
                                onChange={e => changeDetail(selected, 'height', parseInt(e.target.value), buttons[selected].id)}
                            />
                        </td>
                        <td>
                            <input
                                defaultValue={buttons[selected].width}
                                onChange={e => changeDetail(selected, 'width', parseInt(e.target.value), buttons[selected].id)}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>Color</td>
                    </tr>
                    <tr>
                        <td>
                            <input
                                defaultValue={buttons[selected].fill}
                                onChange={e => changeDetail(selected, 'fill', e.target.value, buttons[selected].id)}
                            />
                        </td>
                    </tr>
                </table>
                :
                <></>
                :
                <></>

            }
        </div>
    )
}
