import React from 'react';
import './index.css';
import { useSelector, useDispatch } from 'react-redux';
import { PhotoshopPicker, TwitterPicker, SketchPicker, CirclePicker } from 'react-color';
import { updateDetail, updateBorderRadius } from '../../../store/app/action';
import { parse } from 'uuid';


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

    const chnageBorderRadius = (index, key, value, id, indexborder) => {
        const payload = {
            index,
            key,
            value,
            id,
            indexborder,
            datas : buttons[selected].cornerRadius
        }
        dispatch(updateBorderRadius(payload))
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

    const shadowColor = (color, event) => {
        changeDetail(selected, 'shadowColor', color.hex, buttons[selected].id)
    };

    return (
        <div className="sidebar-right">
            {buttons.length !== 0 ? selected !== '' ?
                <div className="sidebar-right-container">
                    <div className="position">
                        <h5>Positions</h5>
                        <div className="form-container">
                            <div className="form">
                                <label>x position</label>
                                <input
                                    type="number"
                                    name="x"
                                    value={buttons[selected].x}
                                    onChange={(e) => changeDetail(selected, 'x', parseInt(e.target.value), buttons[selected].id)}
                                />
                            </div>
                            <div className="form">
                                <label>y position</label>
                                <input
                                    type="number"
                                    name="y"
                                    value={buttons[selected].y}
                                    onChange={e => changeDetail(selected, 'y', parseInt(e.target.value), buttons[selected].id)}
                                />
                            </div>
                        </div>
                        <div className="form-container">
                            <div className="form">
                                <label>Height</label>
                                <input
                                    type="number"
                                    name="height"
                                    value={buttons[selected].height}
                                    onChange={e => changeDetail(selected, 'height', parseInt(e.target.value), buttons[selected].id)}
                                />
                            </div>
                            <div className="form">
                                <label>Width</label>
                                <input
                                    type="number"
                                    name="width"
                                    value={buttons[selected].width}
                                    onChange={e => changeDetail(selected, 'width', parseInt(e.target.value), buttons[selected].id)}
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
                            onChange={e => changeDetail(selected, 'opacity', parseFloat(e.target.value / 10), buttons[selected].id)}
                            defaultValue={buttons[selected].opacity}  
                            style={{ width: '100%', marginBottom: 20 }} />
                        <TwitterPicker onChange={handleChangeComplete} color={buttons[selected].fill} />
                    </div>
                    
                    <div className="position">
                        <h5>Border</h5>
                        <div className="form-container">
                            <div className="form">
                                <label>Top left</label>
                                <input
                                    type="number"
                                    name="topleft"
                                    value={buttons[selected].cornerRadius[0]}
                                    defaultValue={0}
                                    onChange={(e) => chnageBorderRadius(selected, 'cornerRadius', parseInt(e.target.value), buttons[selected].id, 0)}
                                />
                            </div>
                            <div className="form">
                                <label>Top Right</label>
                                <input
                                    type="number"
                                    value={buttons[selected].cornerRadius[1]}
                                    defaultValue={0}
                                    onChange={e => chnageBorderRadius(selected, 'cornerRadius', parseInt(e.target.value), buttons[selected].id, 1)}
                                />
                            </div>
                        </div>
                        <div className="form-container">
                            <div className="form">
                                <label>Bottom Right</label>
                                <input
                                    type="number"
                                    name="x"
                                    defaultValue={0}
                                    value={buttons[selected].cornerRadius[2]}
                                    onChange={(e) => chnageBorderRadius(selected, 'cornerRadius', parseInt(e.target.value), buttons[selected].id, 2)}
                                />
                            </div>
                            <div className="form">
                                <label>Bottom Left</label>
                                <input
                                    type="number"
                                    value={buttons[selected].cornerRadius[3]}
                                    defaultValue={0}
                                    onChange={e => chnageBorderRadius(selected, 'cornerRadius', parseInt(e.target.value), buttons[selected].id, 3)}
                                />
                            </div>
                        </div>

                        <label style={{ marginTop: 20 }}>Border width</label>
                        <input
                            id="1"
                            type="range"
                            name="transparant"
                            step={1}
                            min={0}
                            max={20}
                            onChange={(e) => changeDetail(selected, 'strokeWidth', parseInt(e.target.value), buttons[selected].id)}
                            defaultValue={buttons[selected].stokeWidth}  
                            style={{ width: '100%', marginBottom: 20,  }} />
                           
                        <TwitterPicker onChange={borderColor} color={buttons[selected].stroke} />
                    </div>

                    <div className="position">
                        <h5>Shadow</h5>
                        <label>Shadow opacity</label>
                        <input
                            id="1"
                            type="range"
                            name="transparant"
                            min={1}
                            max={10}
                            onChange={e => changeDetail(selected, 'shadowOpacity', parseFloat(e.target.value / 10), buttons[selected].id)}
                            defaultValue={buttons[selected].shadowOpacity}  
                            style={{ width: '100%', marginBottom: 20 }} />

                        <label>Shadow blur</label>
                        <input
                            id="1"
                            type="range"
                            name="transparant"
                            min={1}
                            max={50}
                            onChange={e => changeDetail(selected, 'shadowBlur', parseFloat(e.target.value), buttons[selected].id)}
                            defaultValue={buttons[selected].shadowBlur}  
                            style={{ width: '100%', marginBottom: 20 }} />

                            <TwitterPicker onChange={shadowColor} color={buttons[selected].fill} />
                    </div>
                </div>
                : <></> : <></>

            }

        </div>
    )
}
