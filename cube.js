var range = document.getElementById("range");
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
document.addEventListener('keydown', press);
document.addEventListener('keyup', release)
speed = 2;
var interval = null;

var KEY = {
    RIGHT: 39,
    UP: 38,
    LEFT: 37,
    DOWN: 40,
};

var input = {
    right: false,
    up: false,
    left: false,
    down: false,
    quit: false
};

var square = {
    x: 0,
    y: 10,
    w: 20,
    h: 20
};


function press(evt) {
    var code = evt.keyCode;
    switch (code) {
        case KEY.RIGHT:
            {
                input.right = true
                if (interval == null) {
                    interval = setInterval(function () {
                        speed++;
                        called = true;
                    }, 150);
                }
            }
            break;

        case KEY.UP:
            {
                input.up = true;
                if (interval == null) {
                    interval = setInterval(function () {
                        speed++;
                        called = true;
                    }, 150);
                }
            }
            break;

        case KEY.LEFT:
            {
                input.left = true;
                if (interval == null) {
                    interval = setInterval(function () {
                        speed++;
                        called = true;
                    }, 150);
                }
            }
            break;

        case KEY.DOWN:
            {
                input.down = true;
                if (interval == null) {
                    interval = setInterval(function () {
                        speed++;
                        called = true;
                    }, 150);
                }
            }
            break;

    }
}

function reset() {
    clearInterval(interval);
    interval = null;
    speed = 2;
}

function release(evt) {
    var code = evt.keyCode;
    switch (code) {
        case KEY.RIGHT:
            {
                input.right = false;
                reset();
            }
            break;

        case KEY.UP:
            {
                input.up = false;
                reset();
            }
            break;

        case KEY.LEFT:
            {
                input.left = false;
                reset();
            }
            break;

        case KEY.DOWN:
            {
                input.down = false;
                reset();
            }
            break;
    }
}

ctx.fillStyle = "green";

function animate() {

    ctx.clearRect(square.x, square.y, canvas.width, canvas.height);
    if (input.right) {
        if (square.x < (canvas.width - square.w)) {
            square.x = square.x + speed;
        }
    }
    if (input.left) {
        if (square.x > 0) {
            square.x = square.x - speed;
        }
    }
    if (input.up) {
        if (square.y > 0) {
            square.y = square.y - speed;
        }
    }
    if (input.down) {
        if (square.y < (canvas.height - square.h)) {
            square.y = square.y + speed;
        }
    }
    ctx.strokeRect(square.x, square.y, square.w, square.h);
    window.requestAnimationFrame(animate)
}

animate();