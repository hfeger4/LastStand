# Last Stand

## Background
Last Stand is a take on the classic 1986 arcade game Arkanoid. In the game, a layer of bricks lines the top half of the screen. A ball of energy travels across the screen, bouncing off the top and walls but destroying any bricks it comes into contact with. The player loses a turn when the ball touches the bottom of the screen, which can be prevented by using the ship to shield it. The level is won when there are no bricks remaining.

## Functionality and MVP
- Move the ship using the mouse
- Bricks populate and are destroyed when hit, sturdier bricks can take more hits.
- Ball is deflected when it makes contact with the walls, ship, and bricks.
- Different difficulty levels.
- Production README
- BONUS: Arkanoid PowerUps- Special bricks release multiple balls, increase the width of the ship, or effect the speed of the ball.

## Wireframe
The app will consist of a single screen with instructions, game board, and score. The game will take up most of the middle screen, with game controls listed to the right.
![Wireframes](./LastStand.png)

## Architecture and Technologies

### Technologies
- `Webpack` to bundle and use scripts.
- Vanilla `JavaScript` and `JQuery` for structure and game logic.
- `Easel.js` with `HTML5 Canvas` for DOM Manipulation and rendering.

### Architecture
- `bricks.js`: This will contain the creation of the game board and it's bricks. It will be responsible for the destruction and lives for the bricks.
- `ball.js`: This will contain the ball bouncing physics as well as the logic for it's movement.
- `ship.js`: This will contain the creation and movement of the paddle. It was also dictate how objects react when they interact with the paddle.
- `main.js`: This will contain the overall game logic and setup. It will also contain the logic for increased difficulty.

## Implementation

- Day 1: Set up the initial Node modules, webpack configuration, skeleton setup for JavaScript files, review and learn Canvas and Easel. Day Objectives:
  - Create the background using the canvas element.  
  -  Learn enough Canvas to render objects on to the Canvas element.


- Day 2: Continue learning Easel and Canvas. Create the board, ball, and paddle for the game.  Day Objective:
  - Have the ball rendered and bouncing on walls
  - Have the paddle following the mouse or keys
  - Detect collision of the ball, paddle, and walls.


- Day 3: Set up the bricks and the logic for their destruction. Day Objective:
  - Have the bricks rendered on canvas.
  - Detect collision of ball with bricks and remove lives from the bricks.
  - Game should end when the ball touches the bottom wall.


- Day 4:  Style the frontend to be polished and professional.
Day Objective:
  - Create control and rule instructions.
  - Add difficulty settings.
  - Make sure the game runs as smoothly as possible.

## Bonus Features
There are many different variations of this game that use different powerups.
- Special bricks release multiple balls, increase the width of the ship, or effect the speed of the ball.
- Playable music and sound effects for the ball interaction.
- Different themes for the background.
