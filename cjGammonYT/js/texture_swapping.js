let app = new PIXI.Application();

document.body.appendChild(app.view);

app.ticker.add(gameLoop);

function gameLoop(delta){
    console.log(typeof(delta));

}

// app.loader.baseUrl = "js";
app.loader.add('angry','angry.png');
app.loader.add('chasma','chasma.png');
app.loader.add('resayo','resayo.png');

app.loader.onComplete.add(doneLoading);
app.loader.load();
 
function doneLoading(){
    girl = new PIXI.Sprite.from(app.loader.resources['angry'].texture);
    girl.anchor.set(0.5);
    girl.x = app.view.width /2;
    girl.y = app.view.height / 2; 
    app.stage.addChild(girl);

    girl.interactive = true;
    girl.buttonMode = true;

    girl.on('pointerup',pointerUp)
}
function pointerUp(){
    console.log("called");
    girl.texture = app.loader.resources['chasma'].texture;
}