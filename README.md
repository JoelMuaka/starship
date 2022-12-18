# Project : _STARSHIP_

This is a simple video game in which the player uses the keyboard to control the vertical movement of a starship on the left of the screen, which must shoot at flying saucers arriving from the right using the `space` key.

For each successful shot, the player scores points. Conversely, if a flying saucer manages to get through without being destroyed, the player loses points.

## Launch game

* Installation of node modules and generation of the `node_modules` directory :

```
npm install webpack webpack-cli --save-dev
```

* Running the project and generating the `dist` directory containing the bundle.js file :

```
npm run build
```

* Start the game :

```
npm run dev-server
```