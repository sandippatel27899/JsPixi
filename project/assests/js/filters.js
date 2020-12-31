// let pixi_element =  document.getElementById("pixi_wrapper");

// let app = new PIXI.Application({
//     backgroundColor: 0xffffff,
//     resizeTo: pixi_element
// });

// pixi_element.appendChild(app.view);

// let addText = new PIXI.Text("add new text over here");
// app.stage.addChild(addText);

// let addImage = PIXI.Sprite.from("assests/Images/test.png");
// addImage.x = 50;
// addImage.y = 100;

// app.stage.addChild(addImage);

// let  godrayFilter = new PIXI.filters.GodrayFilter();
// let adjustmentFilter = new PIXI.filters.AdjustmentFilter();
// godrayFilter.parallel = false; 
// godrayFilter.center = [670,233];
// godrayFilter.lacunrity = 1.5;
// godrayFilter.gain = 0.45;

// adjustmentFilter.contrast = 1.02 

// addImage.filters = [
//     godrayFilter ,
//     adjustmentFilter
// ];

// let angleSpeed = 0;

// app.ticker.add(function(){
//     angleSpeed += 0.015;
//     godrayFilter.time = angleSpeed;
// });



const app = new PIXI.Application({
    width: 800, height: 600, backgroundColor: 0x1099bb, resolution: window.devicePixelRatio || 1,
});
document.body.appendChild(app.view);

const container = new PIXI.Container();

app.stage.addChild(container);

// Create a new texture
const texture = PIXI.Texture.from('assests/Images/test.png');

// Create a 5x5 grid of bunnies
for (let i = 0; i < 25; i++) {
    const bunny = new PIXI.Sprite(texture);
    bunny.anchor.set(0.5);
    bunny.x = (i % 5) * 40;
    bunny.y = Math.floor(i / 5) * 40;
    container.addChild(bunny);
}

// Move container to the center
container.x = app.screen.width / 2;
container.y = app.screen.height / 2;

// Center bunny sprite in local container coordinates
container.pivot.x = container.width / 2;
container.pivot.y = container.height / 2;

// Listen for animate update
app.ticker.add((delta) => {
    // rotate the container!
    // use delta to create frame-independent transform
    container.rotation -= 0.01 * delta;
});


