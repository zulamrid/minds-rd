import React from 'react'
import { Stage, Layer, Rect, Circle, Transformer, Text } from 'react-konva';
import { useSelector, useDispatch } from 'react-redux'
import { selected, selectedShape, updateButton, updateShape } from '../../store/app/action';

const width = window.innerWidth / 2
const height = window.innerHeight / 2


const Rectangle = ({ shapeProps, isSelected, onSelect, onChange }) => {
  const shapeRef = React.useRef();
  const trRef = React.useRef();

  React.useEffect(() => {
    if (isSelected) {
      // we need to attach transformer manually
      trRef.current.nodes([shapeRef.current]);
      trRef.current.getLayer().batchDraw();
    }
  }, [isSelected]);

  return (
    <React.Fragment>
      <Rect
        onClick={onSelect}
        onTap={onSelect}
        ref={shapeRef}
        {...shapeProps}
        radius={'10px'}
        draggable
        onDragEnd={(e) => {
          onChange({
            ...shapeProps,
            x: e.target.x(),
            y: e.target.y(),
          });
        }}
        onTransformEnd={(e) => {
          // transformer is changing scale of the node
          // and NOT its width or height
          // but in the store we have only width and height
          // to match the data better we will reset scale on transform end
          const node = shapeRef.current;
          const scaleX = node.scaleX();
          const scaleY = node.scaleY();

          // we will reset it back
          node.scaleX(1);
          node.scaleY(1);
          onChange({
            ...shapeProps,
            x: node.x(),
            y: node.y(),
            // set minimal value
            width: Math.max(5, node.width() * scaleX),
            height: Math.max(node.height() * scaleY),
          });
        }}
      />
      {isSelected && (
        <Transformer
          ref={trRef}
          boundBoxFunc={(oldBox, newBox) => {
            // limit resize
            if (newBox.width < 5 || newBox.height < 5) {
              return oldBox;
            }
            return newBox;
          }}
        />
      )}
    </React.Fragment>
  );
};


const Shape = ({ shapeProps, isSelected, onSelect, onChange }) => {
  const shapeRef = React.useRef();
  const trRef = React.useRef();

  React.useEffect(() => {
    if (isSelected) {
      // we need to attach transformer manually
      trRef.current.nodes([shapeRef.current]);
      trRef.current.getLayer().batchDraw();
    }
  }, [isSelected]);

  return (
    <React.Fragment>
      <Rect
        onClick={onSelect}
        onTap={onSelect}
        ref={shapeRef}
        {...shapeProps}
        draggable
        onDragEnd={(e) => {
          onChange({
            ...shapeProps,
            x: e.target.x(),
            y: e.target.y(),
          });
        }}
        onTransformEnd={(e) => {
          // transformer is changing scale of the node
          // and NOT its width or height
          // but in the store we have only width and height
          // to match the data better we will reset scale on transform end
          const node = shapeRef.current;
          const scaleX = node.scaleX();
          const scaleY = node.scaleY();

          // we will reset it back
          node.scaleX(1);
          node.scaleY(1);
          onChange({
            ...shapeProps,
            x: node.x(),
            y: node.y(),
            // set minimal value
            width: Math.max(5, node.width() * scaleX),
            height: Math.max(node.height() * scaleY),
          });
        }}
      />
      {isSelected && (
        <Transformer
          ref={trRef}
          boundBoxFunc={(oldBox, newBox) => {
            // limit resize
            if (newBox.width < 5 || newBox.height < 5) {
              return oldBox;
            }
            return newBox;
          }}
        />
      )}
    </React.Fragment>
  );
};

export default function Index(props) {

  const dispatch = useDispatch()

  const buttons = useSelector(state => state.Main.buttons)
  const shapes = useSelector(state => state.Main.shapes)
  const image = useSelector(state => state.Main.image)

  React.useEffect(() => {
    // console.log(buttons.length)
  }, [buttons, shapes])

  const [rectangles, setRectangles] = React.useState(buttons);
  const [selectedId, selectShape] = React.useState(null);
  const [selectedIdShape, selectShapeS] = React.useState(null);

  const checkDeselect = (e) => {
    // deselect when clicked on empty area
    const clickedOnEmpty = e.target === e.target.getStage();
    if (clickedOnEmpty) {
      selectShape(null);
      selectShapeS(null)
      hideSidebar()
    }
  };

  const showSidebar = () => {
    document.querySelector('.sidebar-right').style.right = 0
  }

  const hideSidebar = () => {
    document.querySelector('.sidebar-right').style.right = '-350px'
  }

  return (
    <Stage
      width={width}
      height={height}
      onMouseDown={checkDeselect}
      onTouchStart={checkDeselect}

      // style={{ 
      //     backgroundImage:`url(${image})`,
      //     backgroundRepeat: 'no-repeat',
      //     backgroundSize: 'cover'
      // }}
      style={image !== '' ? {
        backgroundImage: `url(${image})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
      } : { backgroundColor: 'white' }}
    >
      <Layer>
        {buttons.map((rect, i) => {
          return (
            <Rectangle
              key={i}
              shapeProps={rect}
              onClick={() => alert(rect.label)}
              isSelected={rect.id === selectedId}
              onSelect={() => {
                selectShape(rect.id);
                selectShapeS(null)
                console.log(i)
                dispatch(selected(i))
                showSidebar()
              }}
              onChange={(newAttrs) => {
                const rects = buttons.slice();
                //   rects[i] = newAttrs;
                //   setRectangles(rects);

                dispatch(updateButton(rects[i], newAttrs))
              }}
            />
          );
        })}

        {shapes.map((rect, i) => {
          return (
            <Shape
              key={i}
              shapeProps={rect}
              isSelected={rect.id === selectedIdShape}
              onSelect={() => {
                selectShapeS(rect.id);
                selectShape(null);
                dispatch(selectedShape(i))
                showSidebar()
              }}
              onChange={(newAttrs) => {
                const rects = shapes.slice();
                //   rects[i] = newAttrs;
                //   setRectangles(rects);
                console.log(rects)
                dispatch(updateShape(rects[i], newAttrs))
              }}
            />
          );
        })}
      </Layer>
    </Stage>
  );
}




