import React from 'react';
import './../../App.css';
import Draw from './../Draw/index';
import SidebarLeft from './SideBarLeft';
import SidebarRight from './SideBarRight';
import { useDispatch, useSelector } from 'react-redux';
import { addButton, addShape, setImage, deleteItem } from '../../store/app/action';
import { useHistory } from "react-router-dom";

function App() {
  let history = useHistory();
  const dispatch = useDispatch()
  const [urlImage, setUrlImage] = React.useState('')

  const buttons = useSelector(state => state.Main.buttons)
  const selectedButton = useSelector(state => state.Main.selected)
  const selectedShape = useSelector(state => state.Main.selected_shape)
  const item = useSelector(state => state.Main.item)

  React.useEffect(() => {
    console.log(selectedShape)
    console.log(selectedButton)
    console.log(item)
    console.log(buttons)
  }, [selectedShape, selectedButton, item, buttons])

  const _addImage = () => {
    dispatch(setImage(urlImage))
    setUrlImage('')
  }

  const _addButtons = () => {
    dispatch(addButton())
  }

  const _addShapes = () => {
    dispatch(addShape())
  }

  const _moveUp = () => {
    // buttons[selectedButton].moveUp()
  }

  const _moveDown = () => {
    // buttons[selectedButton].moveUp()
  }

  const _deleteItem = () => {
    const payload = {
      item,
      selectedButton,
      selectedShape
    }

    dispatch(deleteItem(payload))
  }

  const _toPreview = () => {
    history.push("/preview")
    // const win = window.open("/preview", "_blank");
    // win.focus();
  }

  return (
    <div className="App">
      <div className="sidebar-container">
        <SidebarLeft />
      </div>
      <div className="main">
      <div style={{
            display: 'flex',
            width: '100%',
            marginTop: 20,
            justifyContent: 'flex-end'
          }}>
        <div
          className="button"
          style={{ width: '15%', margin: 3, backgroundColor: '#0984e3' }}
          onClick={_toPreview}
        >
          Preview
        </div>
        </div>
        <Draw />
        <div>
          <div style={{
            display: 'flex',
            width: '100%',
            marginTop: 20,
            justifyContent: 'flex-end'
          }}>
            {item === '' ? <></> :
              <>
                <div
                  className="button"
                  style={{ width: '15%', margin: 3, backgroundColor: '#0984e3' }}
                  onClick={_moveUp}
                >
                  Move Up
                </div>
                <div
                  className="button"
                  style={{ width: '15%', margin: 3, backgroundColor: '#0984e3' }}
                  onClick={_moveDown}
                >
                  Move Down
                </div>
                <div
                  className="button"
                  style={{ width: '15%', margin: 3, backgroundColor: '#0984e3' }}
                  onClick={_addImage}
                >
                  Clone
                </div>
                <div
                  className="button"
                  style={{ width: '15%', margin: 3, backgroundColor: '#d63031' }}
                  onClick={_deleteItem}
                >
                  Delete
                </div>
              </>
            }
          </div>
          <div style={{
            display: 'flex',
            width: '100%',
            marginTop: 20,

          }}>
            <input
              style={{ padding: 5, width: '80%', borderRadius: 5, borderWidth: 0 }}
              placeholder="Paste image link here"
              value={urlImage}
              onChange={e => setUrlImage(e.target.value)}
            />
            <div
              className="button"
              style={{ width: '15%', margin: 3 }}
              onClick={_addImage}
            >
              Save
            </div>
          </div>
          <div className="button" onClick={_addButtons}>
            Add button
          </div>
          {/* <div className="button" onClick={_addShapes}>
            Add Shape
          </div> */}
          <div className="button">
            Add Text
          </div>
          <div className="button">
            Add Image / Logo
          </div>
        </div>
      </div>
      <div className="sidebar-container">
        <SidebarRight />
      </div>
    </div>
  );
}

export default App;

