/**
  HTML5 Canvas examples
*/

/* Part I - Basic shapes */

// 1. Get the canvas
var canvas = document.getElementById('my-canvas');

// 2. Get the context
var canvasCtx = canvas.getContext('2d' /* Must be lowercase */);

function clearWhiteboard() {
    canvasCtx.clearRect(0, 0, canvas.width, canvas.height);
}

// 3. Create a rectangle

    // 3.1. fillRect
    canvasCtx.fillRect(10, 10, 50, 50);

    // 3.2. strokeRect
    canvasCtx.strokeRect(10, 70, 50, 50);

    // 3.3. clearRect
    canvasCtx.clearRect(0, 0, canvas.width, canvas.height);

    // 3.4. rect
    canvasCtx.rect(10, 10, 50, 50);
    canvasCtx.stroke();

// 4. Create a circle

    // 4.1. Full circle
    canvasCtx.beginPath();
    canvasCtx.arc(35, 100, 30, 0, Math.PI * 2);
    canvasCtx.stroke();

    // 4.2. Half circle
    canvasCtx.beginPath();
    canvasCtx.arc(35, 200, 30, 0, Math.PI);
    canvasCtx.stroke();

    // 4.3. Quarter circle
    canvasCtx.beginPath();
    canvasCtx.arc(35, 300, 30, 0, Math.PI / 2);
    canvasCtx.fill();

// 5. Create a simple bar chart
clearWhiteboard();
var data = [ 10, 55, 60, 90, 99, 80 ];
var width = 20;
var sizeOfChart = 200;
var spaceBetween = 40;
canvasCtx.fillStyle = 'lime';

data.forEach((val, idx) => {
    canvasCtx.fillRect((idx + 1) * spaceBetween, sizeOfChart - val, width, val);
});

// 6. Use the moveTo(), lineTo() to create a triangle
clearWhiteboard();

function createEqualSideLengthTriangle(sideLength, x, y, fill) {
    canvasCtx.beginPath();
    canvasCtx.moveTo(x, y);
    canvasCtx.lineTo(x + sideLength, y + sideLength);
    canvasCtx.lineTo(x - sideLength, y + sideLength);
    canvasCtx.closePath();
    canvasCtx.stroke();
    if (fill) { canvasCtx.fill(); }
}

createEqualSideLengthTriangle(100, 100, 100);
createEqualSideLengthTriangle(200, 400, 100);

// 7. Experiment with different stroke and fill styles as well as lineWidth etc.
clearWhiteboard();
// canvasCtx.lineWidth = 20;
// canvasCtx.strokeStyle = 'purple';
// canvasCtx.lineCap = 'round';
// canvasCtx.lineJoin = 'round';

createEqualSideLengthTriangle(100, 200, 100, true);

// 8. Use the arcTo method to create a rounded square
clearWhiteboard();
canvasCtx.beginPath();
canvasCtx.moveTo(50, 50);
canvasCtx.lineTo(100, 50);
canvasCtx.arcTo(150, 50, 150, 70, 50);
canvasCtx.lineTo(150, 200);
canvasCtx.arcTo(150, 250, 200, 250, 50);
canvasCtx.lineTo(300, 250);
canvasCtx.stroke();

// 9. Create ripple effect with globalAlpha
clearWhiteboard();
//canvasCtx.globalAlpha = 0.2;
var circleBaseSize = 20;

for (var i = 0; i < 10; i++) {
    canvasCtx.beginPath();

    if (i % 2 === 0) { canvasCtx.fillStyle = 'yellow'; } else { canvasCtx.fillStyle = 'red'; }

    canvasCtx.arc(canvas.width / 2, canvas.height / 2, (i + 1) * circleBaseSize, 0, Math.PI * 2);

    canvasCtx.fill();
    canvasCtx.stroke();
}

// 10. Create a curved line using quadratic curve
clearWhiteboard();
canvasCtx.beginPath();
canvasCtx.moveTo(200, 200);
canvasCtx.quadraticCurveTo(300, 50, 400, 200);
canvasCtx.stroke();

// 11. Create a ripple curve using bezier curve
clearWhiteboard();
canvasCtx.beginPath();
canvasCtx.moveTo(100, 100);
canvasCtx.bezierCurveTo(150, -100, 250, 300, 300, 100);
canvasCtx.stroke();

// 12. Create both filled text and stroked
clearWhiteboard();
canvasCtx.font = '40px Helvetica';
canvasCtx.fillStyle = 'black';
canvasCtx.fillText('Hello World!', 50, 50);

canvasCtx.font = '80px serif';
canvasCtx.strokeText('Hello World Again!', 100, 200);
