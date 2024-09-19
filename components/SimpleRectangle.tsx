import React, { useRef } from 'react';
import { Dimensions, View } from 'react-native';
import Canvas, { CanvasRenderingContext2D } from 'react-native-canvas';

const SimpleRectangle = () => {
  const canvasRef = useRef<Canvas>(null);

  const windowWidth = Dimensions.get('window').width;
  const rectangleHeight = (windowWidth * 3) / 5;

  const handleCanvas = (canvas: Canvas) => {
    if (!canvas) return;
    const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
    canvas.width = windowWidth;
    canvas.height = rectangleHeight;

    if (ctx) {
      // Set the fill color to blue
      ctx.fillStyle = 'blue';

      // Draw a simple rectangle
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    }
  };

  return (
    <View>
      <Canvas ref={handleCanvas} />
    </View>
  );
};
