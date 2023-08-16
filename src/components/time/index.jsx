import React, { useEffect, useRef } from 'react';

const Time = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const canvasWidth = canvas.width;
    const canvasHeight = canvas.height;
    const x = canvasWidth / 4;
    let radius = Math.min(canvasWidth, canvasHeight) / 2;
    ctx.translate(radius, radius);
    radius = radius * 0.9;

    // drawClock();

    function drawClock() {
      drawFace(ctx, radius);
      drawNumbers(ctx, radius);
      drawTime(ctx, radius);
    }

    function drawFace(ctx, radius) {
      ctx.beginPath();
      ctx.arc(x, 0, radius, 0, 2 * Math.PI);
      ctx.fillStyle = 'white';
      ctx.fill();
      ctx.strokeStyle = 'black';
      ctx.lineWidth = radius * 0.05;
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(x, 0, radius * 0.05, 0, 2 * Math.PI);
      ctx.fillStyle = '#333';
      ctx.fill();
    }

    function drawNumbers(ctx, radius) {
      ctx.font = radius * 0.15 + 'px Arial';
      ctx.textBaseline = 'middle';
      ctx.textAlign = 'center';
      for (let num = 1; num <= 12; num++) {
        const ang = (num * Math.PI) / 6;
        ctx.rotate(ang);
        ctx.translate(0, -radius * 0.85);
        ctx.rotate(-ang);
        ctx.fillText(num.toString(), x, 0);
        ctx.rotate(ang);
        ctx.translate(0, radius * 0.85);
        ctx.rotate(-ang);
      }
    }

    function drawTime(ctx, radius) {
      const now = new Date();
      const hour = now.getHours();
      const minute = now.getMinutes();
      const second = now.getSeconds();

      // Draw the hour hand
      const hourAngle = (hour % 12) * (Math.PI / 6) + (minute * Math.PI) / 360;
      drawHand(ctx, hourAngle, x * radius * 0.5, radius * 0.07, '#242424');

      // Draw the minute hand
      const minuteAngle = (minute * Math.PI) / 30 + (second * Math.PI) / 1800;
      drawHand(ctx, minuteAngle, x * radius * 0.8, radius * 0.07, '#242424');

      // Draw the second hand
      const secondAngle = (second * Math.PI) / 30;
      drawHand(ctx, secondAngle, x * radius * 0.9, radius * 0.02, `hsl(${secondAngle * 180 / Math.PI}, 100%, 50%)`);
    }

    function drawHand(ctx, pos, length, width, color) {
      ctx.beginPath();
      ctx.strokeStyle = color;
      ctx.lineWidth = width;
      ctx.lineCap = 'round';
      ctx.moveTo(x, 0);
      ctx.rotate(pos);
      ctx.lineTo(0, -length);
      ctx.stroke();
      ctx.rotate(-pos);
    }

    setInterval(drawClock, 1000);
  }, []);

  return <canvas ref={canvasRef} style={{width : '100%'}}/>;
};

export default Time;
