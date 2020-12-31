PIXI.utils.sayHello("pixijs running !!");
        
let pixi_element =  document.getElementById("pixi_wrapper");

let app = new PIXI.Application({
    backgroundColor: 0xffffff,
    resizeTo: pixi_element
});

pixi_element.appendChild(app.view);

// let addText = new PIXI.Text("add new text over here");
// app.stage.addChild(addText);

let addImage = PIXI.Sprite.from("Images/bunny.png");
addImage.anchor.set(0.5);
addImage.x = app.renderer.width / 2;
addImage.y = app.renderer.height / 2;
addImage.scale.set(0.8);

addImage.interactive = true; //start interaction

addImage.buttonMode = true;  // shows hand button on images when hover

addImage.on('mousemove',onclick);
let last_x = 0;
let last_y = 0;
function onclick(e){
    // if(e.data.global.x > last_x){
    //     console.log("true")
    //     addImage.x *= 1.01;
    // }
    // else{
    //     console.log(e.data.global.x)
    //     addImage.x /= 1.01;
    // }

    // if(e.data.global.y > last_y){
    //     console.log("true")
    //     addImage.y *= 1.01;
    // }
    // else{
    //     console.log(e.data.global.y)
    //     addImage.y /= 1.01;
    // }

    // last_x = e.data.global.x;
    // last_y = e.data.global.y;

    addImage.x = e.data.global.x;
    addImage.y =  e.data.global.y;
}

app.stage.addChild(addImage);
