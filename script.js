function setup() {
    var socket = io();
    var matrix = [];
    var side = 30;

    let weatherElement = document.getElementById('weather')
    let grassCountElement = document.getElementById('grassCount');
    let grassLiveCountElement = document.getElementById('grassLiveCount');
    let grassEaterCountElement = document.getElementById('grassEaterCount');
    let vagrCountElement = document.getElementById('vagrCount');
    let rainCountElement = document.getElementById('rainCount');
    let jurcrichCountElement = document.getElementById('jurcrichCount');

    socket.on("data", drawCreatures);

    function drawCreatures(data) {
        matrix = data.matrix;
        weatherElement.innerText = data.weather; 
        grassCountElement.innerText = data.grassCounter;
        grassLiveCountElement.innerText = data.grassLiveCounter;
        grassEaterCountElement.innerText = data.eatCounter;
        vagrCountElement.innerText = data.vagrCounter;
        raininatorCountElement.innerText = data.rainCounter;
        jurcrichCountElement.innerText = data.jurcrichCounter;

        createCanvas(matrix[0].length * side, matrix.length * side)

        background('#acacac');


        for (var i = 0; i < matrix.length; i++) {
            for (var j = 0; j < matrix[i].length; j++) {
                if (matrix[i][j] == 1) {
                    if (data.weather == "summer") {
                        fill("green");
                    } else if (data.weather == "autumn") {
                        fill("orange");
                    }
                    rect(j * side, i * side, side, side);
                } else if (matrix[i][j] == 2) {
                    fill("yellow");
                    rect(j * side, i * side, side, side);
                } else if (matrix[i][j] == 0) {
                    fill('#acacac');
                    rect(j * side, i * side, side, side);
                } else if (matrix[i][j] == 3) {
                    fill('red');
                    rect(j * side, i * side, side, side);
                } else if (matrix[i][j] == 4) {
                    fill('blue');
                    rect(j * side, i * side, side, side);
                } else if (matrix[i][j] == 5) {
                    fill('black');
                    rect(j * side, i * side, side, side);
                }
            }
        }
    }

}
// let grassArr = [];
// let grassEaterArr = [];
// let vagrArr = []
// let rainArr = [];
// let jurcrichArr = []

// function setup() {
//     matrixGenerator(20, 50, 40, 6, 3, 5);
//     frameRate(8);
//     createCanvas(matrix[0].length * side, matrix.length * side);
//     background('#acacac');
//     for (var y = 0; y < matrix.length; y++) {
//         for (var x = 0; x < matrix[y].length; x++) {
//             if (matrix[y][x] == 1) {
//                 let grass = new Grass(x, y);
//                 grassArr.push(grass);
//             }
//             if (matrix[y][x] == 2) {
//                 let grassEater = new GrassEater(x, y);
//                 grassEaterArr.push(grassEater);
//             }
//             if (matrix[y][x] == 3) {
//                 let vagr = new Vagr(x, y);
//                 vagrArr.push(vagr);
//             }
//             if (matrix[y][x] == 4) {
//                 let rain = new Rain(x, y);
//                 rainArr.push(rain);
//             }
//             if (matrix[y][x] == 5) {
//                 let jurcrich = new Jurcrich(x, y);
//                 jurcrichArr.push(jurcrich);
//             }
//         }
//     }
//     function matrixGenerator(matrixSize, grass, grassEater, vagr, rain, jurcrich) {
//         for (let i = 0; i < matrixSize; i++) {
//             matrix[i] = [];
//             for (let o = 0; o < matrixSize; o++) {
//                 matrix[i][o] = 0;
//             }
//         }
//         for (let i = 0; i < grass; i++) {
//             let customX = Math.floor(random(0, matrixSize));
//             let customY = Math.floor(random(0, matrixSize));
//             matrix[customY][customX] = 1;
//         }
//         for (let i = 0; i < grassEater; i++) {
//             let customX = Math.floor(random(0, matrixSize));
//             let customY = Math.floor(random(0, matrixSize));
//             matrix[customY][customX] = 2;
//         }
//         for (let i = 0; i < vagr; i++) {
//             let customX = Math.floor(random(0, matrixSize));
//             let customY = Math.floor(random(0, matrixSize));
//             matrix[customY][customX] = 3;
//         }
//         for (let i = 0; i < rain; i++) {
//             let customX = Math.floor(random(0, matrixSize));
//             let customY = Math.floor(random(0, matrixSize));
//             matrix[customY][customX] = 4;
//         }
//         for (let i = 0; i < jurcrich; i++) {
//             let customX = Math.floor(random(0, matrixSize));
//             let customY = Math.floor(random(0, matrixSize));
//             matrix[customY][customX] = 5;
//         }
//     }
// }

// function draw() {
//     for (var y = 0; y < matrix.length; y++) {
//         for (var x = 0; x < matrix[y].length; x++) {
//             if (matrix[y][x] == 1) {
//                 fill("green");
//             }
//             else if (matrix[y][x] == 0) {
//                 fill("#acacac");
//             }
//             else if (matrix[y][x] == 2) {
//                 fill("orange");
//             }
//             else if (matrix[y][x] == 3) {
//                 fill("red");
//             }
//             else if (matrix[y][x] == 4) {
//                 fill("blue");
//             }
//             else if (matrix[y][x] == 5) {
//                 fill("magenta");
//             }
//             rect(x * side, y * side, side, side);

//         }
//     }
//     for (var i in grassArr) {
//         grassArr[i].mul();
//     }

//     for (var i in grassEaterArr) {
//         grassEaterArr[i].eat();
//     }
//     for (var i in vagrArr) {
//         vagrArr[i].utel();
//     }
//     for (var i in rainArr) {
//         rainArr[i].ml();
//     }
//     for (var i in jurcrichArr) {
//         jurcrichArr[i].kcel();
//     }
// }
