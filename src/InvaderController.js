import Invader from "./Invader.js";

export default class InvaderController {
    invadersMap = [
        [1,1,1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,1,1,1],
        [2,2,2,3,3,3,3,2,2,2],
        [2,2,2,3,3,3,3,2,2,2],
        [1,1,1,1,1,1,1,1,1,1],
        [2,2,2,2,2,2,2,2,2,2]
    ];

    invadersRows=[];
    
    
    constructor(canvas){
        this.canvas= canvas;

        this.createInvaders();
    }

    draw(ctx){
        this.drawInvaders(ctx);
    }

    drawInvaders(ctx){
        this.invadersRows.flat().forEach((invader)=>{
            invader.draw(ctx);
        })
    }

    createInvaders(){
        this.invadersMap.forEach((row, rowIndex)=>{
            this.invadersRows[rowIndex] = [];
            row.forEach((invaderNumber, invaderIndex)=>{
                if(invaderNumber>0){
                    this.invadersRows[rowIndex].push(
                        new Invader(invaderIndex*50, rowIndex*35, invaderNumber)

                    );
                    console.log(this.invadersRows);
                }
            })
        })
    }
}