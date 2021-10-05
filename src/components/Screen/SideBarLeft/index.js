import React from 'react';
import './sidebar.css';
import { useSelector } from 'react-redux';

export default function Index() {

    const buttons = useSelector(state => state.Main.buttons)
    const shapes = useSelector(state => state.Main.shapes)
    const image = useSelector(state => state.Main.image)

    const cekButtons = () => {
        console.log(buttons)
    }

    return (
        <div className="sidebar">
             <pre style={{ color: '#fff' }}>
              image: {image}
            </pre>
            <pre style={{ color: '#fff' }}>
              buttons: {JSON.stringify(buttons, null, 2)}
            </pre>
            {/* <pre style={{ color: '#fff' }}>
              shapes: {JSON.stringify(shapes, null, 2)}
            </pre> */}
        </div>
    )
}
