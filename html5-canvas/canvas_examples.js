/**
  HTML5 Canvas examples
*/

/* Part I - Basic shapes */

// 1. Get the canvas
var canvas = document.getElementById('my-canvas');

// 2. Get the context
var ctx = canvas.getContext('2d');

function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
};

// 3. Create a rectangle

    // 3.1. fillRect
    ctx.fillRect(20, 20, 200, 100);

    // 3.2. strokeRect
    ctx.strokeRect(20, 150, 200, 100);

    // 3.3. clearRect
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // 3.4. rect
    ctx.fillStyle = 'blue';
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 10;
    ctx.rect(20, 20, 200, 100);
    ctx.stroke();
    ctx.fill();

// 4. Create a circle
    clearCanvas();
    // 4.1. Full circle
    ctx.beginPath();
    ctx.arc(200, 200, 100, 0, Math.PI * 2);
    ctx.stroke();
    ctx.fill();

    // 4.2. Half circle
    ctx.beginPath();
    ctx.arc(500, 200, 100, 0, Math.PI);
    ctx.stroke();

    // 4.3. Quarter circle
    ctx.beginPath();
    ctx.arc(500, 400, 100, 0, Math.PI / 2);
    ctx.closePath();
    ctx.stroke();

// 5. Create a simple bar chart
clearCanvas();
var data = [ 10, 55, 60, 70, 80, 90, 99 ];
var width = 20;
var spaceBetween = 40;
var chartHeight = 200;

for (var i = 0; i < data.length; i++) {
    var currentElement = data[i];
    ctx.fillRect(i * spaceBetween, chartHeight - currentElement, width, currentElement);
}

// 6. Use the moveTo(), lineTo() to create a triangle
clearCanvas();

function triangle(x, y, width) {
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + width, y - width);
    ctx.lineTo(x + width * 2, y);
    ctx.closePath();
    ctx.stroke();
};

triangle(100, 100, 100);
triangle(200, 200, 300);


// 7. Experiment with different stroke and fill styles as well as lineWidth etc.
clearWhiteboard();
// canvasCtx.lineWidth = 20;
// canvasCtx.strokeStyle = 'purple';
// canvasCtx.lineCap = 'round';
// canvasCtx.lineJoin = 'round';

createEqualSideLengthTriangle(100, 200, 100, true);

// 8. Use the arcTo method to create a rounded square
clearCanvas();
ctx.beginPath();

ctx.moveTo(100, 100);
ctx.lineTo(200, 100);
ctx.arcTo(250, 100, 250, 150, 50);

ctx.stroke();

// 9. Create ripple effect with globalAlpha
clearCanvas();
//ctx.globalAlpha = 0.2;
for (var i = 0; i < 10; i++) {
    ctx.beginPath();
    ctx.arc(200, 200, 20 * i, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
};

// 10. Create a curved line using quadratic curve
ctx.lineWidth = 1;
clearCanvas();
ctx.beginPath();
ctx.moveTo(100, 100);
ctx.quadraticCurveTo(200, 20, 300, 100);
ctx.stroke();

// 11. Create a ripple curve using bezier curve
clearCanvas();
ctx.beginPath();
ctx.moveTo(100, 100);
ctx.bezierCurveTo(150, -20, 250, 180, 300, 100);
ctx.stroke();

// 12. Create both filled text and stroked
clearCanvas();
ctx.font = '40px Helvetica';
ctx.fillText('Hello World', 40, 40);
ctx.strokeText('Hello World Again!', 40, 200);
