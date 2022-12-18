export default class Mobile {

  constructor(x,y,deltaX = 0,deltaY = 0,src) {
    this._x = x;
    this._y = y;
    this._deltaX = deltaX;
    this._deltaY = deltaY;
    this.image = new Image();
    this.image.src = src;
  }

  draw(ctx) {
    ctx.drawImage(this.image,this._x, this._y);
  }

  set deltaX(val) {
    this._deltaX = val;
  }

  set deltaY(val) {
    this._deltaY = val;
  }


  move(myCanvas) {
    this._x += this._deltaX;
    this._y += this._deltaY;
  }

  get img() {
    return this.image;
  }

  get x() {
    return this._x;
  }

  get y() {
    return this._y;
  }

  get deltaX() {
    return this._deltaX;
  }

  get deltaY() {
    return this._deltaY;
  }
}
