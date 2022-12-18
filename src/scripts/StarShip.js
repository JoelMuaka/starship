import Mobile from "./Mobile";
import MoveState from "./MoveState";
import vaisseau from "../assets/images/vaisseau-ballon-petit.png";

export default class StarShip extends Mobile {

  constructor(x,y,deltaX = 0,deltaY = 8,src = vaisseau) {
    super(x, y, deltaX, deltaY, src);
    this.moving = MoveState.NONE;
  }

  up(){
    if (this.moving === MoveState.UP)
      return true;
    return false;
  }

  down(){
    if (this.moving === MoveState.DOWN)
      return true;
    return false;
  }

  moveUp() {
    this._deltaY = - 8;
    this.moving = MoveState.UP;
  }
  moveDown() {
    this.deltaY = + 8;
    this.moving = MoveState.DOWN;
  }
  move(canva) {

    if (this.up()){

      if ((this.y + this._deltaY) >= 0)
            super.move(canva);
        }
    if (this.down()){

          if ((this.y + this._deltaY) <= (canva.height - this.img.height))
            super.move(canva);
        }
      }

  stopMoving() {
    this.moving = MoveState.NONE;
  }

}
