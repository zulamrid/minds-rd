import React from 'react';
import './index.css';
import { useSelector, useDispatch } from 'react-redux';
import { PhotoshopPicker, TwitterPicker, SketchPicker, CirclePicker } from 'react-color';
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

        dispatch(updateDetail(payload))
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

    const handleChangeComplete = (color, event) => {
        changeDetail(selected, 'fill', color.hex, buttons[selected].id)
    };

    return (
        <div className="sidebar-right">
            {buttons.length !== 0 ? selected !== '' ?
                <div className="sidebar-right-container">
                    <div className="position">
                        <div className="form-container">
                            <div className="form">
                                <label>x</label>
                                <input
                                    defaultValue={buttons[selected].x}
                                    onChange={e => changeDetail(selected, 'x', e.target.value, buttons[selected].id)}
                                />
                            </div>
                            <div className="form">
                                <label>y</label>
                                <input
                                    type="text"
                                    // value={buttons[selected].y}
                                    defaultValue={buttons[selected].y}
                                    onChange={e => changeDetail(selected, 'y', e.target.value, buttons[selected].id)}
                                />
                            </div>
                        </div>
                        <div className="form-container">
                            <div className="form">
                                <label>Height</label>
                                <input
                                    defaultValue={buttons[selected].height}
                                    onChange={e => changeDetail(selected, 'height', e.target.value, buttons[selected].id)}
                                />
                            </div>
                            <div className="form">
                                <label>Width</label>
                                <input
                                    defaultValue={buttons[selected].width}
                                    onChange={e => changeDetail(selected, 'width', e.target.value, buttons[selected].id)}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="position">
                        <div className="form-container">
                            <div className="form">
                                <label>x</label>
                                <input
                                    defaultValue={buttons[selected].x}
                                    onChange={e => changeDetail(selected, 'x', e.target.value, buttons[selected].id)}
                                />
                            </div>
                            <div className="form">
                                <label>y</label>
                                <input
                                    type="text"
                                    // value={buttons[selected].y}
                                    defaultValue={buttons[selected].y}
                                    onChange={e => changeDetail(selected, 'y', e.target.value, buttons[selected].id)}
                                />
                            </div>
                        </div>
                        <div className="form-container">
                            <div className="form">
                                <label>Height</label>
                                <input
                                    defaultValue={buttons[selected].height}
                                    onChange={e => changeDetail(selected, 'height', e.target.value, buttons[selected].id)}
                                />
                            </div>
                            <div className="form">
                                <label>Width</label>
                                <input
                                    defaultValue={buttons[selected].width}
                                    onChange={e => changeDetail(selected, 'width', e.target.value, buttons[selected].id)}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="position">
                        <TwitterPicker onChange={handleChangeComplete} color={buttons[selected].fill}  />
                    </div>
                </div>
                : <></> : <></>

            }
            {/* // <table>
                //     <tr>
                //         <td>x</td>
                //         <td> y </td>

                //     </tr>
                //     <tr>
                //         <td>
                //             <input
                //                 defaultValue={buttons[selected].y}
                //                 onChange={e => changeDetail(selected, 'y', e.target.value, buttons[selected].id)}
                //             />
                //         </td>
                //         <td>
                //             <input
                //                 type="text"
                //                 name="any2"
                //                 defaultValue={buttons[selected].x}
                //                 onChange={e => changeDetail(selected, 'x', e.target.value, buttons[selected].id)}
                //             /></td>
                //     </tr>
                //     <tr>
                //         <td>Width</td>
                //         <td>Height</td>

                //     </tr>
                //     <tr>
                //         <td>
                //             <input
                //                 defaultValue={buttons[selected].height}
                //                 onChange={e => changeDetail(selected, 'height', parseInt(e.target.value), buttons[selected].id)}
                //             />
                //         </td>
                //         <td>
                //             <input
                //                 defaultValue={buttons[selected].width}
                //                 onChange={e => changeDetail(selected, 'width', parseInt(e.target.value), buttons[selected].id)}
                //             />
                //         </td>
                //     </tr>
                //     <tr>
                //         <td>Color</td>
                //     </tr>
                //     <tr>
                //         <td>
                //             <input
                //                 defaultValue={buttons[selected].fill}
                //                 onChange={e => changeDetail(selected, 'fill', e.target.value, buttons[selected].id)}
                //             />
                //         </td>
                //     </tr>
                // </table>
                // :
                // <></>
                // :
                // <></> */}
        </div>
    )
}
