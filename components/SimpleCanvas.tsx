import React, { useRef } from 'react';
import { View } from 'react-native';
import Canvas, { CanvasRenderingContext2D } from 'react-native-canvas';

const SimpleCanvas = () => {
  const canvasRef = useRef<Canvas>(null);

  const handleCanvas = (canvas: Canvas) => {
    if (!canvas) return;
    const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

    if (ctx) {
      // Set the fill color to blue
      ctx.fillStyle = 'blue';

      // Draw a simple rectangle
      ctx.fillRect(50, 50, 200, 100);
    }
  };

  return (
    <View>
      <Canvas ref={handleCanvas} />
    </View>
  );
};

export default SimpleCanvas;
