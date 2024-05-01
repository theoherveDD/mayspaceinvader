import '../css/style.scss';
import Space from '../assets/images/space.png';

import InvaderController from './InvaderController';
import Player from './player';

let canvas = document.getElementById("game");
let ctx = canvas.getContext("2d");
canvas.height = 600;
canvas.width= 600;
const background = new Image();
background.src = Space;
ctx.Image = background;

const invaderController = new InvaderController(canvas);
const player = new Player(canvas,3);

function game(){
    ctx.drawImage(background, 0,0,canvas.width, canvas.height);
    invaderController.draw(ctx);
    player.draw(ctx);
}

setInterval(game,1000/60);