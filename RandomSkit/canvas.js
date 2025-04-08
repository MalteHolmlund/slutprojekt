let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d"); // 2D-renderingskontext

ctx.beginPath();
ctx.moveTo(50, 50);
ctx.lineTo(50, 200);
ctx.lineTo(150, 200);
ctx.moveTo(300, 50);
ctx.lineTo(200, 50);
ctx.lineTo(200, 200);
ctx.lineTo(300, 200);
ctx.moveTo(200, 125);
ctx.lineTo(300, 125);
ctx.strokeStyle = "pink";
ctx.lineWidth = 5;
ctx.stroke();

ctx.beginPath();
ctx.arc(400, 125, 75, 0, Math.PI * 2);
ctx.strokeStyle = "orange";
linewith = 5;
ctx.stroke();

ctx.beginPath();
        ctx.arc(100, 300, 75, 0, Math.PI * 2); // (x, y, radie, startvinkel, slutvinkel)
        ctx.strokeStyle = "black"; // Kantfärg
        ctx.lineWidth = 5; // Kantens tjocklek
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(100, 450, 75, 0, Math.PI * 2); // (x, y, radie, startvinkel, slutvinkel)
        ctx.strokeStyle = "black"; // Kantfärg
        ctx.lineWidth = 5; // Kantens tjocklek
        ctx.stroke();

ctx.beginPath();
ctx.moveTo(175, 300);
ctx.lineTo(800, 300);
ctx.moveTo(175, 450);
ctx.lineTo(800, 450);
ctx.strokeStyle = "black";
ctx.linewith = 5;
ctx.stroke();

function toRadians(degrees) {
    return degrees * (Math.PI / 180);
}

ctx.beginPath();
        ctx.arc(800, 375, 75, toRadians(270), toRadians(90)); // (x, y, radie, startvinkel, slutvinkel)
        ctx.strokeStyle = "black"; // Kantfärg
        ctx.lineWidth = 5; // Kantens tjocklek
        ctx.stroke();

ctx.beginPath();
ctx.moveTo(875, 375);
ctx.lineTo(850, 375);
ctx.moveTo(800, 300);
ctx.lineTo(800, 450);
ctx.strokeStyle = "black";
ctx.linewith = 5;
ctx.stroke();