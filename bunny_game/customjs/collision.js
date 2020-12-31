// new app

const app = new PIXI.Application({
    backgroundColor : 0x111111
});

document.body.appendChild(app.view);


//red square which we wanted to move
const redSquare = new PIXI.Sprite(PIXI.Texture.WHITE);
redSquare.position.set(0,0);
redSquare.width = 100;
redSquare.height = 100;
redSquare.tint = '0xFF0000';
redSquare.acceleration = new PIXI.Point(0);
redSquare.mass = 1;

const blueSquare = new PIXI.Sprite(PIXI.Texture.WHITE);
blueSquare.position.set(100,100);
blueSquare.width = 100;
blueSquare.height = 100;
blueSquare.tint = '0x0000FF';
blueSquare.acceleration = new PIXI.Point(0);
blueSquare.mass = 1;

const movementSpeed = 0.05;
const impulsePower = 5;


function distanceBetweenTwoPoints(p1,p2){
    const a = p1.x - p2.x;
    const b = p1.y - p2.y;

    return Math.hypot(a, b);
}

function testForAABB(object1, object2) {
    const bounds1 = object1.getBounds();
    const bounds2 = object2.getBounds();

    return bounds1.x < bounds2.x + bounds2.width
        && bounds1.x + bounds1.width > bounds2.x
        && bounds1.y < bounds2.y + bounds2.height
        && bounds1.y + bounds1.height > bounds2.y;
}

function collisionResponse(object1, object2) {
    if (!object1 || !object2) {
        return new PIXI.Point(0);
    }

    const vCollision = new PIXI.Point(
        object2.x - object1.x,
        object2.y - object1.y,
    );

    const distance = Math.sqrt(
        (object2.x - object1.x) * (object2.x - object1.x)
        + (object2.y - object1.y) * (object2.y - object1.y),
    );

    const vCollisionNorm = new PIXI.Point(
        vCollision.x / distance,
        vCollision.y / distance,
    );

    const vRelativeVelocity = new PIXI.Point(
        object1.acceleration.x - object2.acceleration.x,
        object1.acceleration.y - object2.acceleration.y,
    );

    const speed = vRelativeVelocity.x * vCollisionNorm.x
        + vRelativeVelocity.y * vCollisionNorm.y;

    const impulse = impulsePower * speed / (object1.mass + object2.mass);

    return new PIXI.Point(
        impulse * vCollisionNorm.x,
        impulse * vCollisionNorm.y,
    );
}

app.ticker.add((delta) => {
    redSquare.acceleration.set(redSquare.acceleration.x * 0.99, redSquare.acceleration.y * 0.99);
    blueSquare.acceleration.set(blueSquare.acceleration.x * 0.99, blueSquare.acceleration.y * 0.99);

    const mouseCoords = app.renderer.plugins.interaction.mouse.global;


    //if any square touches the border then reverser its direction
    if(blueSquare.x < 0 || blueSquare.x > (app.screen.width)){
        blueSquare.acceleration.y = -blueSquare.acceleration.y;
    }

    if(blueSquare.y < 0 || blueSquare.y > (app.screen.height)){
        blueSquare.acceleration.y = -blueSquare.acceleration.y;
    }

    if ((blueSquare.x < -30 || blueSquare.x > (app.screen.width + 30))
    || blueSquare.y < -30 || blueSquare.y > (app.screen.height + 30)) {
    blueSquare.position.set((app.screen.width - 100) / 2, (app.screen.height - 100) / 2);
}

    // if mouese in offscreen
    if (app.screen.width > mouseCoords.x || mouseCoords.x >0 || app.screen.height > mouseCoords.y
        || mouseCoords.y > 0){
            const redSquareCenterPosition = new  PIXI.Point(
                redSquare.x + (redSquare.width * 0.5),
                redSquare.y + (redSquare.height * 0.5),
            );
        
        const toMouseDirection = new PIXI.Point(
            mouseCoords.x - redSquareCenterPosition.x,
            mouseCoords.y - redSquareCenterPosition.y,
        );

        const angleToMouse = Math.atan2(
            toMouseDirection.y,
            toMouseDirection.x,
        );

        
        const distMouseRedSquare = distanceBetweenTwoPoints(
            mouseCoords,
            redSquareCenterPosition,
        );
        const redSpeed = distMouseRedSquare * movementSpeed;

        // Calculate the acceleration of the red square
        redSquare.acceleration.set(
            Math.cos(angleToMouse) * redSpeed,
            Math.sin(angleToMouse) * redSpeed,
        );
    }

    if (testForAABB(blueSquare, redSquare)) {
        // Calculate the changes in acceleration that should be made between
        // each square as a result of the collision
        const collisionPush = collisionResponse(blueSquare, redSquare);
        // Set the changes in acceleration for both squares
        redSquare.acceleration.set(
            (collisionPush.x * blueSquare.mass),
            (collisionPush.y * blueSquare.mass),
        );
        blueSquare.acceleration.set(
            -(collisionPush.x * redSquare.mass),
            -(collisionPush.y * redSquare.mass),
        );
    }


    blueSquare.x += blueSquare.acceleration.x * delta;
    blueSquare.y += blueSquare.acceleration.y * delta;

    redSquare.x += redSquare.acceleration.x * delta;
    redSquare.y += redSquare.acceleration.y * delta;

})



app.stage.addChild(redSquare,blueSquare);



