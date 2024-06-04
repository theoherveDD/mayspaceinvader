import '../css/style.scss';
import Space from '../assets/images/space.png';

import InvaderController from './InvaderController';
import Player from './player';
import Bulletcontroller from './BulletController';

// import victorySound from "../assets/sounds/victory.wav";
// import gameOverSound from "../assets/sounds/gameover.wav";

let canvas = document.getElementById("game");
let ctx = canvas.getContext("2d");
canvas.height = 600;
canvas.width = 600;
const background = new Image();
background.src = Space;
ctx.Image = background;

const playerBulletController = new Bulletcontroller(canvas, 10, "red", true);
const player = new Player(canvas, 3, playerBulletController);

const invadersBulletController = new Bulletcontroller(canvas, 4, "white", false);
const invaderController = new InvaderController(canvas, invadersBulletController, playerBulletController);

let isGameOver = false;
let didWin = false;


function game() {
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

    if (!isGameOver) {
        invaderController.draw(ctx);
        player.draw(ctx);
        playerBulletController.draw(ctx);
        invadersBulletController.draw(ctx);
    }
    checkGameOver();
    displayGameOver();
}

setInterval(game, 1000 / 60);

function checkGameOver(){
    if(isGameOver){
        return;
    }
    if(invadersBulletController.collideWith(player)){
        isGameOver=true;
    }else if(invaderController.collideWith(player)){
        isGameOver = true;
    }else if(invaderController.invadersRows.length==0){
        invaderController.createInvaders();
        invaderController.moveDownTimerDefault = invaderController.moveDownTimerDefault*1.5;
        invaderController.fireBulletTimerDefault =  invaderController.fireBulletTimerDefault*0.5;
        invaderController.defaultXVelocity = invaderController.defaultXVelocity*1.5;
        invaderController.defaultYVelocity = invaderController.defaultYVelocity*1.5;
        invaderController.updateLevel();
    }
}

function displayGameOver() {
    if (isGameOver) {
        let text = didWin ? "You Win" : "Game Over";
        let textOffset = didWin ? 3.5 : 5;

        // //ajoute un son pour la victoire ou la défaite
        // let audio = new Audio();
        // audio.src = didWin ? victorySound : gameOverSound;
        // audio.load();
        // audio.oncanplaythrough = function() {
        // audio.play();
        // };

        ctx.fillStyle = "white";
        ctx.font = "70px Arial";
        ctx.fillText(text, canvas.width / textOffset, canvas.height / 2);

        // Vérifie si le bouton existe déjà
        if (!document.getElementById("replayButton")) {
            // Création du bouton de replay
            let button = document.createElement("button");
            button.id = "replayButton"; // Ajout d'un id au bouton
            button.innerHTML = "Replay";
            button.style.position = "absolute";
            button.style.top = "50%";
            button.style.left = "50%";
            button.style.transform = "translate(-50%, -50%)";
            button.style.padding = "20px";
            button.style.fontSize = "20px";
            button.style.backgroundColor = "red";
            button.style.color = "white";
            button.style.border = "none";
            button.style.zIndex = "1000";

            // Ajout de l'événement de clic au bouton
            button.addEventListener("click", () => {
                isGameOver = false;
                didWin = false;
                player.reset();
                invaderController.reset();
                invaderController.resetLevel();
                document.body.removeChild(button); // Suppression du bouton après le clic
            });

            // Ajout du bouton au corps du document
            document.body.appendChild(button);
        }
    }
}