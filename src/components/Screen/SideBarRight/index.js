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

    const borderColor = (color, event) => {
        changeDetail(selected, 'stroke', color.hex, buttons[selected].id)
    };

    return (
        <div className="sidebar-right">
            {buttons.length !== 0 ? selected !== '' ?
                <div className="sidebar-right-container">
                    <div className="position">
                        <h5>Positions</h5>
                        <div className="form-container">
                            <div className="form">
                                <label>x</label>
                                <input
                                    type="text"
                                    name="x"
                                    value={buttons[selected].x}
                                    onChange={(e)=> changeDetail(selected, 'x', e.target.value, buttons[selected].id)}
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
                    <h5>Fill & Opacity</h5>
                        <input 
                            id="1" 
                            type="range" 
                            name="transparant" 
                            min={1} 
                            max={10} 
                            onChange={e => changeDetail(selected, 'opacity', parseFloat(e.target.value/10), buttons[selected].id)}
                            // value={buttons[selected].opacity}  
                            style={{ width:'100%', marginBottom:20 }} />
                            <TwitterPicker onChange={handleChangeComplete} color={buttons[selected].fill} />
                    </div>
                    <div className="position">
                    <h5>Border</h5>
                        <input 
                            id="1" 
                            type="range" 
                            name="transparant" 
                            min="0"
                            max="20" 
                            onChange={e => changeDetail(selected, 'strokeWidth', parseInt(e.target.value), buttons[selected].id)}
                            // value={buttons[selected].opacity}  
                            style={{ width:'100%', marginBottom:20 }} />
                            <TwitterPicker onChange={borderColor} color={buttons[selected].stroke} />
                    </div>
                    </div>
                    : <></> : <></>

            }
                  
                </div>
    )
}
