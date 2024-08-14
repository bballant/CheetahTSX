import React, { useRef } from 'react';
import { View } from 'react-native';
import Canvas, { CanvasRenderingContext2D } from 'react-native-canvas';

type Position = {
  position: string;
  x: number;
  y: number;
};

type SoccerFieldProps = {
  offsetX: number;
  offsetY: number;
  width: number;
  height: number;
  formation: number;
  playerNames: Map<string, string>;
};

const SoccerField: React.FC<SoccerFieldProps> = ({
  offsetX,
  offsetY,
  width,
  height,
  formation,
  playerNames,
}) => {
  const canvasRef = useRef<Canvas>(null);

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
    ctx.beginPath();
    ctx.rect(offsetX, offsetY, width, height);
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(width / 2 + offsetX, height / 2 + offsetY, height / 5, 0, 2 * Math.PI);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(width / 2 + offsetX, offsetY);
    ctx.lineTo(width / 2 + offsetX, height + offsetY);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(offsetX, offsetY + 60);
    ctx.lineTo(offsetX + 60, offsetY + 60);
    ctx.lineTo(offsetX + 60, offsetY + height - 60);
    ctx.lineTo(offsetX, offsetY + height - 60);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(offsetX + width - 60, offsetY + 60);
    ctx.lineTo(offsetX + width, offsetY + 60);
    ctx.lineTo(offsetX + width, offsetY + height - 60);
    ctx.lineTo(offsetX + width - 60, offsetY + height - 60);
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
    if (ctx) {
      const positions = getPositions(formation);
      drawField(ctx);
      drawPlayers(ctx, positions);
    }
  };

  return (
    <View>
      <Canvas ref={canvasRef} style={{ width, height }} onCanvasReady={handleCanvas} />
    </View>
  );
};

export default SoccerField;
