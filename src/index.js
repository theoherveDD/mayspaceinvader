import '../css/style.scss';
import Space from '../assets/images/space.png';

import InvaderController from './InvaderController';
import Player from './player';
import Bulletcontroller from './BulletController';

let canvas = document.getElementById("game");
let ctx = canvas.getContext("2d");
canvas.height = 600;
canvas.width= 600;
const background = new Image();
background.src = Space;
ctx.Image = background;

const playerBulletController = new Bulletcontroller(canvas,10, "red", true);
const player = new Player(canvas,3,playerBulletController);

const invadersBulletController = new Bulletcontroller(canvas,4, "white", false);
const invaderController = new InvaderController(canvas, invadersBulletController, playerBulletController);



function game(){
    ctx.drawImage(background, 0,0,canvas.width, canvas.height);
    invaderController.draw(ctx);
    player.draw(ctx);
    playerBulletController.draw(ctx);
    invadersBulletController.draw(ctx)
}

setInterval(game,1000/60);