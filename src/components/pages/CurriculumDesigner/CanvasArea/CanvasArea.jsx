// import React, { useRef, useState } from 'react';
// import './CanvasArea.css';

// const CanvasArea = () => {
//   const canvasRef = useRef(null);
//   const [shapes, setShapes] = useState([]);
//   const [draggingShape, setDraggingShape] = useState(null);

//   const drawShapes = () => {
//     const ctx = canvasRef.current.getContext('2d');
//     ctx.clearRect(0, 0, 800, 600);
//     shapes.forEach((shape) => {
//       ctx.beginPath();
//       if (shape.type === 'rectangle') {
//         ctx.rect(shape.x, shape.y, 50, 50);
//       } else if (shape.type === 'circle') {
//         ctx.arc(shape.x, shape.y, 25, 0, Math.PI * 2);
//       } else if (shape.type === 'text') {
//         ctx.font = "30px Arial";
//         ctx.fillText("Text", shape.x, shape.y);
//       } else if (shape.type === 'triangle') {
//         ctx.moveTo(shape.x, shape.y - 50);
//         ctx.lineTo(shape.x + 25, shape.y + 25);
//         ctx.lineTo(shape.x - 25, shape.y + 25);
//         ctx.closePath();
//       } else if (shape.type === 'ellipse') {
//         ctx.ellipse(shape.x, shape.y, 25, 15, 0, 0, Math.PI * 2);
//       }
//       ctx.stroke();
//       ctx.fill();
//     });  
//   };

//   const handleMouseDown = (e) => {
//     const rect = canvasRef.current.getBoundingClientRect();
//     const x = e.clientX - rect.left;
//     const y = e.clientY - rect.top;
//     const foundShape = shapes.find((shape) => {
//         // hit detection
//       if (shape.type === 'rectangle') {
//         return x >= shape.x && x <= shape.x + 50 && y >= shape.y && y <= shape.y + 50;
//       } else if (shape.type === 'circle') {
//         const dx = shape.x - x;
//         const dy = shape.y - y;
//         return dx * dx + dy * dy <= 25 * 25;
//       } else if (shape.type === 'text') {
//         return x >= shape.x && x <= shape.x + 50 && y >= shape.y - 30 && y <= shape.y;
//       } else if (shape.type === 'triangle') {
//         // Simplified hit detection for an equilateral triangle
//         const dx = shape.x - x;
//         const dy = shape.y - y;
//         return dy >= 0 && dy <= 50 && dx >= -25 && dx <= 25;
//       } else if (shape.type === 'ellipse') {
//         // Ellipse hit detection (x/a)^2 + (y/b)^2 <= 1
//         const dx = x - shape.x;
//         const dy = y - shape.y;
//         return (dx * dx) / (25 * 25) + (dy * dy) / (15 * 15) <= 1;
//       }
//       return false;
//     });
//     setDraggingShape(foundShape);
//   };
  
  

//   const handleMouseMove = (e) => {
//     if (draggingShape) {
//       const rect = canvasRef.current.getBoundingClientRect();
//       draggingShape.x = e.clientX - rect.left;
//       draggingShape.y = e.clientY - rect.top;
//       drawShapes();
//     }
//   };

//   const handleMouseUp = () => {
//     setDraggingShape(null);
//   };

//   const addShape = (type) => {
//     const newShape = { type, x: 10, y: 10 };
//     setShapes([...shapes, newShape]);
//     setTimeout(() => drawShapes(), 0); // Force redraw
//   };  

//   return (
//     <div>
//       <canvas
//         ref={canvasRef}
//         width={1700}
//         height={675}
//         onMouseDown={handleMouseDown}
//         onMouseMove={handleMouseMove}
//         onMouseUp={handleMouseUp}
//       ></canvas>
//       <button onClick={() => addShape('rectangle')}>Add Rectangle</button>
//       <button onClick={() => addShape('circle')}>Add Circle</button>
//       <button onClick={() => addShape('text')}>Add Text</button>
//       <button onClick={() => addShape('triangle')}>Add Triangle</button>
//       <button onClick={() => addShape('ellipse')}>Add Ellipse</button>
//     </div>
//   );
// };

// export default CanvasArea;

import React, { useRef, useState } from 'react';
import './CanvasArea.css';
import { Resizable } from 'react-resizable'; // Import resizable component

const CanvasArea = () => {
  const canvasRef = useRef(null);
  const [shapes, setShapes] = useState([]);
  const [selectedShape, setSelectedShape] = useState(null);
  const [erasing, setErasing] = useState(false);
  const [history, setHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [editedText, setEditedText] = useState('');

  const pushToHistory = (shapes) => {
    const newHistory = history.slice(0, historyIndex + 1);
    newHistory.push(shapes);
    setHistory(newHistory);
    setHistoryIndex(newHistory.length - 1);
  };

  const undo = () => {
    if (historyIndex > 0) {
      const newHistoryIndex = historyIndex - 1;
      setShapes(history[newHistoryIndex]);
      setHistoryIndex(newHistoryIndex);
    }
  };

  const redo = () => {
    if (historyIndex < history.length - 1) {
      const newHistoryIndex = historyIndex + 1;
      setShapes(history[newHistoryIndex]);
      setHistoryIndex(newHistoryIndex);
    }
  };

  const drawShapes = (ctx) => {
    ctx.clearRect(0, 0, 800, 600);
    shapes.forEach((shape, index) => {
      ctx.beginPath();
      if (shape.type === 'rectangle') {
        ctx.rect(shape.x, shape.y, shape.width, shape.height);
      } else if (shape.type === 'circle') {
        ctx.arc(shape.x, shape.y, shape.radius, 0, Math.PI * 2);
      } else if (shape.type === 'stickyNote') {
        ctx.fillStyle = '#FFFFCC';
        ctx.fillRect(shape.x, shape.y, shape.width, shape.height);
        ctx.strokeStyle = 'black';
        ctx.strokeRect(shape.x, shape.y, shape.width, shape.height);
        ctx.fillStyle = 'black';
        ctx.font = '18px Arial';
        ctx.fillText(shape.text, shape.x + 10, shape.y + 30);
      } else if (shape.type === 'textBox') {
        ctx.fillStyle = 'white';
        ctx.fillRect(shape.x, shape.y, shape.width, shape.height);
        ctx.strokeStyle = 'black';
        ctx.strokeRect(shape.x, shape.y, shape.width, shape.height);
        ctx.fillStyle = 'black';
        ctx.font = '18px Arial';
        ctx.fillText(shape.text, shape.x + 10, shape.y + 30);
      }
      ctx.stroke();
      if (selectedShape === index) {
        drawResizeHandles(ctx, shape);
      }
    });
  };

  const drawResizeHandles = (ctx, shape) => {
    ctx.strokeStyle = 'blue';
    ctx.lineWidth = 2;
    ctx.strokeRect(shape.x, shape.y, shape.width, shape.height);
    ctx.fillStyle = 'blue';
    const handleSize = 8;
    ctx.fillRect(shape.x - handleSize / 2, shape.y - handleSize / 2, handleSize, handleSize);
    ctx.fillRect(shape.x + shape.width - handleSize / 2, shape.y - handleSize / 2, handleSize, handleSize);
    ctx.fillRect(shape.x - handleSize / 2, shape.y + shape.height - handleSize / 2, handleSize, handleSize);
    ctx.fillRect(shape.x + shape.width - handleSize / 2, shape.y + shape.height - handleSize / 2, handleSize, handleSize);
  };

  const handleMouseDown = (e) => {
    const rect = canvasRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    if (erasing) {
      const updatedShapes = shapes.filter((shape) => {
        if (shape.type === 'stickyNote' || shape.type === 'textBox') {
          if (x >= shape.x && x <= shape.x + shape.width && y >= shape.y && y <= shape.y + shape.height) {
            return false;
          }
        }
        return true;
      });
      pushToHistory(updatedShapes); // Push changes to history
      setShapes(updatedShapes);
      const ctx = canvasRef.current.getContext('2d');
      drawShapes(ctx);
    } else {
      for (let i = shapes.length - 1; i >= 0; i--) {
        const shape = shapes[i];
        if (
          x >= shape.x &&
          x <= shape.x + shape.width &&
          y >= shape.y &&
          y <= shape.y + shape.height
        ) {
          setSelectedShape(i);
          setEditedText(shape.text);
          return;
        }
      }
      setSelectedShape(null);
    }
  };

  const handleMouseMove = (e) => {
    if (selectedShape !== null && !erasing) {
      const rect = canvasRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const shape = shapes[selectedShape];

      shape.x = x - shape.width / 2;
      shape.y = y - shape.height / 2;

      const ctx = canvasRef.current.getContext('2d');
      drawShapes(ctx);
    }
  };

  const handleMouseUp = () => {
    setSelectedShape(null);
  };

  const handleTextChange = (e) => {
    setEditedText(e.target.value);

    if (selectedShape !== null) {
      const updatedShapes = [...shapes];
      updatedShapes[selectedShape].text = e.target.value;
      pushToHistory(updatedShapes); // Push changes to history
      setShapes(updatedShapes);

      const ctx = canvasRef.current.getContext('2d');
      drawShapes(ctx);
    }
  };

  const handleTextResize = (event, { size }) => {
    if (selectedShape !== null) {
      const updatedShapes = [...shapes];
      updatedShapes[selectedShape].width = size.width;
      updatedShapes[selectedShape].height = size.height;
      pushToHistory(updatedShapes); // Push changes to history
      setShapes(updatedShapes);

      const ctx = canvasRef.current.getContext('2d');
      drawShapes(ctx);
    }
  };

  const addShape = (type) => {
    const newShape = { type, x: 10, y: 10, width: 50, height: 50, radius: 25, text: 'Text' };
    const updatedShapes = [...shapes, newShape];
    pushToHistory(updatedShapes); // Push changes to history
    setShapes(updatedShapes);
    const ctx = canvasRef.current.getContext('2d');
    drawShapes(ctx);
  };

  const addStickyNote = () => {
    const newStickyNote = { type: 'stickyNote', x: 10, y: 10, width: 150, height: 150, text: 'Sticky Note' };
    const updatedShapes = [...shapes, newStickyNote];
    pushToHistory(updatedShapes); // Push changes to history
    setShapes(updatedShapes);
    const ctx = canvasRef.current.getContext('2d');
    drawShapes(ctx);
  };

  const addTextBox = () => {
    const newTextBox = { type: 'textBox', x: 10, y: 10, width: 200, height: 100, text: 'Edit me' };
    const updatedShapes = [...shapes, newTextBox];
    pushToHistory(updatedShapes); // Push changes to history
    setShapes(updatedShapes);
    const ctx = canvasRef.current.getContext('2d');
    drawShapes(ctx);
  };

  const eraseSelectedShape = (e) => {
    const rect = canvasRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const updatedShapes = shapes.filter((shape) => {
      if (shape.type === 'stickyNote' || shape.type === 'textBox') {
        if (x >= shape.x && x <= shape.x + shape.width && y >= shape.y && y <= shape.y + shape.height) {
          return false;
        }
      }
      return true;
    });
    pushToHistory(updatedShapes); // Push changes to history
    setShapes(updatedShapes);
    const ctx = canvasRef.current.getContext('2d');
    drawShapes(ctx);
  };

  return (
    <div>
      <canvas
        ref={canvasRef}
        width={800}
        height={600}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      ></canvas>
      <div>
        {selectedShape !== null && !erasing ? (
          <div>
            {shapes[selectedShape]?.type === 'textBox' ? (
              <Resizable
                width={shapes[selectedShape]?.width || 200}
                height={shapes[selectedShape]?.height || 100}
                onResize={handleTextResize}
              >
                <textarea
                  value={editedText}
                  onChange={handleTextChange}
                  style={{
                    width: `${shapes[selectedShape]?.width || 200}px`,
                    height: `${shapes[selectedShape]?.height || 100}px`,
                  }}
                />
              </Resizable>
            ) : (
              <input
                type="text"
                value={editedText}
                onChange={handleTextChange}
              />
            )}
          </div>
        ) : (
          <>
            <button onClick={() => addShape('rectangle')}>Add Rectangle</button>
            <button onClick={() => addShape('circle')}>Add Circle</button>
            <button onClick={() => addTextBox()}>Add Text Box</button>
            <button onClick={() => addStickyNote()}>Add Sticky Note</button>
            <button onClick={() => setErasing(!erasing)}>{erasing ? 'Cancel Erase' : 'Erase'}</button>
            <button onClick={() => undo()}>Undo</button>
            <button onClick={() => redo()}>Redo</button>
          </>
        )}
      </div>
    </div>
  );
};

export default CanvasArea;
