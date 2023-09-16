import React, { useRef, useState } from 'react';
import './CanvasArea.css';

const CanvasArea = () => {
  const canvasRef = useRef(null);
  const [shapes, setShapes] = useState([]);
  const [draggingShape, setDraggingShape] = useState(null);

  const drawShapes = () => {
    const ctx = canvasRef.current.getContext('2d');
    ctx.clearRect(0, 0, 800, 600);
    shapes.forEach((shape) => {
      ctx.beginPath();
      if (shape.type === 'rectangle') {
        ctx.rect(shape.x, shape.y, 50, 50);
      } else if (shape.type === 'circle') {
        ctx.arc(shape.x, shape.y, 25, 0, Math.PI * 2);
      } else if (shape.type === 'text') {
        ctx.font = "30px Arial";
        ctx.fillText("Text", shape.x, shape.y);
      } else if (shape.type === 'triangle') {
        ctx.moveTo(shape.x, shape.y - 50);
        ctx.lineTo(shape.x + 25, shape.y + 25);
        ctx.lineTo(shape.x - 25, shape.y + 25);
        ctx.closePath();
      } else if (shape.type === 'ellipse') {
        ctx.ellipse(shape.x, shape.y, 25, 15, 0, 0, Math.PI * 2);
      }
      ctx.stroke();
      ctx.fill();
    });  
  };

  const handleMouseDown = (e) => {
    const rect = canvasRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const foundShape = shapes.find((shape) => {
        // hit detection
      if (shape.type === 'rectangle') {
        return x >= shape.x && x <= shape.x + 50 && y >= shape.y && y <= shape.y + 50;
      } else if (shape.type === 'circle') {
        const dx = shape.x - x;
        const dy = shape.y - y;
        return dx * dx + dy * dy <= 25 * 25;
      } else if (shape.type === 'text') {
        return x >= shape.x && x <= shape.x + 50 && y >= shape.y - 30 && y <= shape.y;
      } else if (shape.type === 'triangle') {
        // Simplified hit detection for an equilateral triangle
        const dx = shape.x - x;
        const dy = shape.y - y;
        return dy >= 0 && dy <= 50 && dx >= -25 && dx <= 25;
      } else if (shape.type === 'ellipse') {
        // Ellipse hit detection (x/a)^2 + (y/b)^2 <= 1
        const dx = x - shape.x;
        const dy = y - shape.y;
        return (dx * dx) / (25 * 25) + (dy * dy) / (15 * 15) <= 1;
      }
      return false;
    });
    setDraggingShape(foundShape);
  };
  
  

  const handleMouseMove = (e) => {
    if (draggingShape) {
      const rect = canvasRef.current.getBoundingClientRect();
      draggingShape.x = e.clientX - rect.left;
      draggingShape.y = e.clientY - rect.top;
      drawShapes();
    }
  };

  const handleMouseUp = () => {
    setDraggingShape(null);
  };

  const addShape = (type) => {
    const newShape = { type, x: 10, y: 10 };
    setShapes([...shapes, newShape]);
    setTimeout(() => drawShapes(), 0); // Force redraw
  };  

  return (
    <div>
      <canvas
        ref={canvasRef}
        width={1700}
        height={675}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      ></canvas>
      <button onClick={() => addShape('rectangle')}>Add Rectangle</button>
      <button onClick={() => addShape('circle')}>Add Circle</button>
      <button onClick={() => addShape('text')}>Add Text</button>
      <button onClick={() => addShape('triangle')}>Add Triangle</button>
      <button onClick={() => addShape('ellipse')}>Add Ellipse</button>
    </div>
  );
};

export default CanvasArea;
