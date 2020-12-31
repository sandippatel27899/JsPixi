
import * as PIXI from 'pixi.js';

/**
 * CONSOLE HELLO WORLD
 * nb : also rendered with new PIXI.Application()
 */

// let type = 'WebGL';
// if (!PIXI.utils.isWebGLSupported()){
//   type = 'canvas';
// }

// PIXI.utils.sayHello(type);

/**
 * APPLICATION
 */

let app = new PIXI.Application({
  width: 256, 
  height: 256,
  // antialias: true,
  // transparent: true,
  // resolution: 1,
  // backgroundColor: 0x061639,
  // forceCanvas: true,
});

/**
 * RENDERER
 * Used to update the renderer after creation.
 */

// app.renderer.backgroundColor = 0x061639;

// Resize canvas
app.renderer.autoResize = true;
app.renderer.resize(512, 512);

// Resize canvas to fill the entire window
// app.renderer.view.style.position = 'absolute';
// app.renderer.view.style.display = 'block';
app.renderer.autoResize = true;
app.renderer.resize(window.innerWidth, window.innerHeight);

console.log('renderer dimensions : ' + 
  app.renderer.view.width + ', ' + 
  app.renderer.view.height
);

// Add the canvas to the DOM
document.body.appendChild(app.view);

/**
 * SPRITES
 * - load image
 * - convert to texture
 * - create sprite
 * - display by adding it to the stage (main/root container)
 */

// Load multiple images
// PIXI.loader
//   .add([
//     'img/cat.png',
//     'img/cat2.png',
//   ])
//   .load(setup);

PIXI.loader
  .add('assests/Images/test.png')
  // .add('img/cat2.png')
  .load(setup);

/**
 * Callback function run when an image is loaded.
 * Create a sprite from texture and add it to the stage.
 */
function setup() {
  let catSprite = new PIXI.Sprite(
    PIXI.loader.resources['assests/Images/test.png'].texture
  );

  app.stage.addChild(catSprite);
}

// Hide or remove a sprite
// catSprite.visible = false;
// app.stage.removeChild(catSprite);