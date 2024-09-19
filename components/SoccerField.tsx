import React, { useRef } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import Canvas, { CanvasRenderingContext2D } from 'react-native-canvas';

type Position = {
  position: string;
  x: number;
  y: number;
};

type SoccerFieldProps = {
  formation: number;
  playerNames: Map<string, string>;
};

const SoccerField: React.FC<SoccerFieldProps> = ({
  formation,
  playerNames,
}) => {
  const offsetX = 5;
  const offsetY = offsetX * 3 / 5;

  const windowWidth = Dimensions.get('window').width;
  const windowHeight = windowWidth * 3 / 5;
  const canvasWidth = windowWidth - (2 * offsetX);
  const canvasHeight = canvasWidth * 3 / 5;
  const width = canvasWidth // TODO clean up variables
  const height = canvasHeight

  const getPositions = (formation: number): Position[] => {
    switch (formation) {
      case 322:
        return [
          { position: 'GK', x: width / 10 + offsetX, y: height / 2 + offsetY },
          { position: 'LB', x: width / 4 + offsetX, y: height / 4 + offsetY },
          { position: 'CB', x: width / 4 + offsetX, y: height / 2 + offsetY },
          { position: 'RB', x: width / 4 + offsetX, y: (height * 3) / 4 + offsetY },
          { position: 'LM', x: (width * 4) / 8 + offsetX, y: (height * 3) / 8 + offsetY },
          { position: 'RM', x: (width * 4) / 8 + offsetX, y: (height * 5) / 8 + offsetY },
          { position: 'LF', x: (width * 6) / 8 + offsetX, y: (height * 3) / 8 + offsetY },
          { position: 'RF', x: (width * 6) / 8 + offsetX, y: (height * 5) / 8 + offsetY },
        ];
      case 331:
        return [
          { position: 'GK', x: width / 10 + offsetX, y: height / 2 + offsetY },
          { position: 'LB', x: width / 4 + offsetX, y: height / 2 + offsetY },
          { position: 'CB', x: width / 4 + offsetX, y: height / 4 + offsetY },
          { position: 'RB', x: width / 4 + offsetX, y: (height * 3) / 4 + offsetY },
          { position: 'LM', x: (width * 4) / 8 + offsetX, y: height / 4 + offsetY },
          { position: 'CM', x: (width * 4) / 8 + offsetX, y: height / 2 + offsetY },
          { position: 'RM', x: (width * 4) / 8 + offsetX, y: (height * 3) / 4 + offsetY },
          { position: 'ST', x: (width * 6) / 8 + offsetX, y: height / 2 + offsetY },
        ];
      case 442:
        return [
          { position: 'GK', x: width / 10 + offsetX, y: height / 2 + offsetY },
          { position: 'LB', x: width / 4 + offsetX, y: height / 5 + offsetY },
          { position: 'LCB', x: width / 4 + offsetX, y: (height * 2) / 5 + offsetY },
          { position: 'RCB', x: width / 4 + offsetX, y: (height * 3) / 5 + offsetY },
          { position: 'RB', x: width / 4 + offsetX, y: (height * 4) / 5 + offsetY },
          { position: 'LM', x: (width * 4) / 8 + offsetX, y: height / 5 + offsetY },
          { position: 'LCM', x: (width * 4) / 8 + offsetX, y: (height * 2) / 5 + offsetY },
          { position: 'RCM', x: (width * 4) / 8 + offsetX, y: (height * 3) / 5 + offsetY },
          { position: 'RM', x: (width * 4) / 8 + offsetX, y: (height * 4) / 5 + offsetY },
          { position: 'LF', x: (width * 6) / 8 + offsetX, y: height / 3 + offsetY },
          { position: 'RF', x: (width * 6) / 8 + offsetX, y: (height * 2) / 3 + offsetY },
        ];
      case 433:
        return [
          { position: 'GK', x: width / 10 + offsetX, y: height / 2 + offsetY },
          { position: 'LB', x: width / 4 + offsetX, y: height / 5 + offsetY },
          { position: 'LCB', x: width / 4 + offsetX, y: (height * 2) / 5 + offsetY },
          { position: 'RCB', x: width / 4 + offsetX, y: (height * 3) / 5 + offsetY },
          { position: 'RB', x: width / 4 + offsetX, y: (height * 4) / 5 + offsetY },
          { position: 'LM', x: (width * 4) / 8 + offsetX, y: height / 4 + offsetY },
          { position: 'CM', x: (width * 4) / 8 + offsetX, y: height / 2 + offsetY },
          { position: 'RM', x: (width * 4) / 8 + offsetX, y: (height * 3) / 4 + offsetY },
          { position: 'LF', x: (width * 6) / 8 + offsetX, y: height / 4 + offsetY },
          { position: 'ST', x: (width * 6) / 8 + offsetX, y: height / 2 + offsetY },
          { position: 'RF', x: (width * 6) / 8 + offsetX, y: (height * 3) / 4 + offsetY },
        ];
      default:
        return [];
    }
  };

  const drawField = (ctx: CanvasRenderingContext2D) => {
    ctx.clearRect(0, 0, windowWidth, windowHeight);

    // Draw the outer field
    ctx.fillStyle = "#ccffcc"; // light green
    const clipX = 7; // clipping fudge factor when drawing field
    const clipY = 5;
    ctx.beginPath();
    ctx.rect(offsetX + 1, offsetY + 1, canvasWidth - clipX, canvasHeight - clipY);
    ctx.fill();
    ctx.strokeStyle = "black";
    ctx.stroke();
    ctx.fillStyle = "black"; // reset fill

    // Draw center circle
    ctx.beginPath();
    const centerX = canvasWidth / 2 + offsetX;
    const centerY = canvasHeight / 2 + offsetY;
    const centerCircleRadius = canvasHeight / 5;
    ctx.arc(centerX, centerY, centerCircleRadius, 0, 2 * Math.PI);
    ctx.stroke();

    // Draw center line
    ctx.beginPath();
    ctx.moveTo(centerX, offsetY);
    ctx.lineTo(centerX, canvasHeight + offsetY);
    ctx.stroke();

    // Draw left penalty box (proportional to the field height)
    const penaltyBoxHeight = canvasHeight * 0.6;
    const penaltyBoxWidth = canvasWidth * 0.2;
    ctx.beginPath();
    ctx.rect(offsetX + 1, centerY - penaltyBoxHeight / 2, penaltyBoxWidth, penaltyBoxHeight);
    ctx.stroke();

    // Draw right penalty box (proportional to the field height)
    ctx.beginPath();
    ctx.rect(canvasWidth + offsetX - penaltyBoxWidth - 1, centerY - penaltyBoxHeight / 2, penaltyBoxWidth, penaltyBoxHeight);
    ctx.stroke();
  };

  const drawPlayers = (ctx: CanvasRenderingContext2D, positions: Position[]) => {
    for (const pos of positions) {
      ctx.beginPath();
      ctx.arc(pos.x, pos.y, 5, 0, 2 * Math.PI);
      ctx.stroke();
      const labelText = playerNames.get(pos.position) || pos.position;
      ctx.fillText(labelText, pos.x - 15, pos.y - 10);
    }
  };

  const handleCanvas = (canvas: Canvas) => {
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    canvas.width = width;
    canvas.height = height;
    if (ctx) {
      const positions = getPositions(formation);
      drawField(ctx);
      drawPlayers(ctx, positions);
    }
  };

  const handleCanvas_ = (canvas: Canvas) => {
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
      <Canvas
        style={{ width: windowWidth, height: windowHeight }}
        ref={handleCanvas}
      />
    </View>
  );
};

export default SoccerField;
