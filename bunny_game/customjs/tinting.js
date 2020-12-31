

const app = new PIXI.Application();
document.body.appendChild(app.view)

const aliens = []

const totalDudes = 2;

for (let i=0;i<totalDudes;i++){
    const dude = PIXI.Sprite.from('Images/eggHead.png');
    dude.anchor.set(0.5);
    dude.scale.set(0.8 + Math.random() * 0.3);
    dude.x = Math.random() * app.screen.width;
    dude.y = Math.random() * app.screen.height;
    dude.tint = Math.random() * 0xFFFFFF  ;
    dude.direction = Math.random() * Math.PI * 2;
    dude.turningSpeed = Math.random() - 0.8;
    dude.speed = 2 + Math.random() * 2;
    aliens.push(dude);

    app.stage.addChild(dude);
}

const dudeBoundsPadding = 100;
const dudeBound = new PIXI.Rectangle(0, 0,
    app.screen.width ,
    app.screen.height );


let a =0;
app.ticker.add(() =>{
    console.log("called",a);
    for (let i = 0; i< aliens.length;i++){
        const dude = aliens[i];
        dude.direction -= dude.turningSpeed * 0.01;
        dude.x += Math.sin(dude.direction) * dude.speed;
        dude.y += Math.cos(dude.direction) * dude.speed;
        dude.rotation = -dude.direction - Math.PI / 2;
        
        //edge condition for not escaping the image
        if (dude.x < dudeBound.x){
            dude.x += dudeBound.width;
        }else if(dude.x > dudeBound.x + dudeBound.width){
            dude.x -= dudeBound.width;
        }
        if (dude.y < dudeBound.y) {
            dude.y += dudeBound.height;
        }else if(dude.y > dudeBound.y + dudeBound.height){
            dude.y -= dudeBound.height;
        }
    }

}
)