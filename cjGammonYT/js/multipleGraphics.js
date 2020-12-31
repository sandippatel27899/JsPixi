const app2 = new PIXI.Application({
    backgroundColor: 0xFF0000
});

document.body.appendChild(app2.view);

r1 = createRect(300,300,100,100, 0x00FF00);
r2 = createRect(500,300,100,100, 0x123456);
app2.stage.addChild(r1);
app2.stage.addChild(r2);
function createRect(x, y, w, h, color){
    rect = new PIXI.Graphics();
    rect.beginFill(0x0000FF);
    rect.drawRect(x, y, w, h);
    rect.endFill();
    rect.interactive = true;
    rect.buttonMode = true;
    rect.color = color;
    rect.interactive = true;
    rect.on('pointerup',pointerUp);
    
    return rect;
}

function pointerUp(){
    console.log("this",this.color);
    this.tint = this.color; 
}

