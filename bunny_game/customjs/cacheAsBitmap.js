
const app = new PIXI.Application();

document.body.appendChild(app.view);
app.stop();
app.loader
    .add('spritsheet','Images/eggHead.png')
    .load(onAssetsLoaded);


let count = 0;
const eggHeadContainer = new PIXI.Container();
eggHeadContainer.x = 400;
eggHeadContainer.y = 300;

app.stage.interactive = true;
app.stage.addChild(eggHeadContainer);
const aliens = [];

function onAssetsLoaded(){
    for (let i=0;i<100;i++){
        const eggHead = new PIXI.Sprite.from('Images/eggHead.png');
        eggHead.tint = Math.random() * 0xFFFFFF;

        eggHead.x = Math.random() * 800 - 400;
        eggHead.y = Math.random() * 600 - 300;
        eggHead.anchor.x = 0.5;
        eggHead.anchor.y = 0.5;
        aliens.push(eggHead);
        eggHeadContainer.addChild(eggHead);
    }
    app.start()
}

app.stage.on('pointer',onClick);
function onClick(){
    eggHeadContainer.cacheAsBitmap = !eggHeadContainer.cacheAsBitmap;
}

app.ticker.add(() => {
    for (let i=0;i<100;i++){
        const alien = aliens[i];
        alien.rotation += 0.01;
    }
    count += 0.01;   

    eggHeadContainer.scale.x = Math.sin(count);
    eggHeadContainer.scale.y = Math.sin(count);
    eggHeadContainer.rotation += 0.01;
});