import Mobile from "./Mobile";
import MoveState from "./MoveState";
import flySaucer from "../assets/images/flyingSaucer-petit.png";

export default class Saucer extends Mobile {

  constructor(x,y,deltaX = -3,deltaY = 0,src = flySaucer) {
    super(x, y, deltaX, deltaY, src);
    this._touched = false;
  }

  set touched(val) {
    this._touched = val;
  }

  get touched() {
    return this._touched;
  }

}
