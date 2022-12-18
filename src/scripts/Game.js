import Saucer from "./Saucer";
import Shoot from "./Shoot";
import StarShip from "./StarShip";


class Game{
  constructor(canva) {
      this.canva = canva;
      this.context = this.canva.getContext("2d");
      this._starship = new StarShip(40,this.canva.height/2);
      this._saucers = new Array();
      this._tirs = new Array();
      this._score = 0;
      this.x = null;
      this.y = null;
  }

  addSaucer = () =>{
    this._saucers.push(new Saucer(this.canva.width-48,this.alea(this.canva.height-36)));
  }
  addTir(){
    this._tirs.push(new Shoot(this._starship.x+this._starship.img.width,this._starship.y+this._starship.img.height/2));
  }

  suppSaucer(){
    this._saucers.forEach(function(el,index) {
      if (el.x <= 0){
        this._saucers.splice(index, 1);
        this._score -= 1000;
        this.changeScore();
      }
      else if (el.y+el.img.height >= this.canva.height){
        this._saucers.splice(index, 1);
      }
    },this);
  }

  suppTir(){
    this._tirs.filter(el => el.x + el.img.width >= this.canva.width)
    .forEach((tir, i) => {
      this._tirs.splice(i, 1);
    }, this);
  }

  moveAndDraw = () => {
    this.context.clearRect(0, 0, this.canva.width, this.canva.height);

    const myTab = [...this._saucers, ...this._tirs, this._starship];
    myTab.forEach(function(el) {
      el.move(this.canva);
      el.draw(this.context);
    },this);

    this._tirs
    .filter(el => el.detectorCollision(this._saucers))
    .forEach((el, i) =>{
      this._tirs.splice(i, 1);
      this._score += 200;
      this.changeScore();
    }, this);

    this.suppSaucer();
    this.suppTir();
  }

  changeScore(){
    const elem1 = document.getElementById("score");
    elem1.textContent = this._score;
  }

  stop() {
    clearInterval(this.x);
  }

  startSaucers() {
    this.x = setInterval(this.addSaucer, 750);
  }

  startMoveAndDraw() {
    this.y = setInterval(this.moveAndDraw, 100);
  }

  alea(n){
    return Math.floor(Math.random() * Math.floor(n));
  }

  get saucers() {
    return this._saucers;
  }

  get starship() {
    return this._starship;
  }

  get tirs() {
    return this._tirs;
  }

  get score() {
    return this._score;
  }

  keyDown(event){
    switch (event.keyCode) {
      case 40:
        this._starship.moveDown();
        break;
      case 38:
        this._starship.moveUp();
        break;
      case 32:
        this.addTir();
        break;
      default: return;
    }
    event.preventDefault();
  }

  keyUp(event) {
    switch (event.keyCode) {
      case 40:
      case 38:
        this._starship.stopMoving();
        break;
      default: return;
    }
    event.preventDefault();
  }
}

const myCanvas = document.getElementById("stars");
const context = myCanvas.getContext("2d");
var theGame = new Game(myCanvas);
// for a "true" singleton
theGame.constructor = undefined;
Object.getPrototypeOf(theGame).constructor = undefined;

export default theGame;
