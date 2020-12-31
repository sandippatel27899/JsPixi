
const app = new PIXI.Application({
    height : 1300,
    width :800,
    // backgroundColor : 0x1099bb,
    transparent : true,
    resolution: window.devicePixelRatio || 1,
});

document.body.appendChild(app.view);

const container = new PIXI.Container();

app.stage.addChild(container);

const bunnyTexture = PIXI.Texture.from('Images/bunny.png');

// for (let i=0;i<25;i++){
//     bunny = new PIXI.Sprite(bunnyTexture);
//     bunny.anchor.set(0.5);
//     bunny.x = (i % 5) * 40;
//     bunny.y = (i%5) * 40;
//     container.addChild(bunny);
// }
for (let i=0; i<5; i++){
    for(let j=0;j<5;j++){
        bunny = new PIXI.Sprite(bunnyTexture);
        bunny.anchor.set(0.5);
        bunny.x = i*40;
        bunny.y = j*40;
        container.addChild(bunny);
    }
}

container.x = app.screen.width / 2;
container.y = app.screen.height /2;
// container.anchor.set(0.5);

container.pivot.x = container.width / 2;   //for setting container at center
container.pivot.y = container.height / 2;


app.ticker.add((delta) =>{
    // console.log(delta);
    container.rotation += 0.01 * (delta); 
})