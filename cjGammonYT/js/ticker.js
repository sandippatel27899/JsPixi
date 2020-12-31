const app = new PIXI.Application({
    backgroundColor: 0xFF0000
});

document.body.appendChild(app.view);
rect = new PIXI.Graphics();
rect.beginFill(0x0000FF);
rect.drawRect(200,200,100,100);
rect.endFill();
rect.interactive = true;
rect.buttonMode = true;

rect.on("pointerup",pointerUp);
// rect.on("pointerdown",pointerDown);
app.stage.addChild(rect);
rect.on("pointerdown", (e) => {
    console.log("up", e.data.buttons); // left mouse button prints '1'
  });
function pointerDown(e){
    console.log("pointer down",e);
    this.tint = 0x123123;
}

function pointerUp(e){
    console.log("pointer up",e);
    this.tint = 0x123123;
}



