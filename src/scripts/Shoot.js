import Mobile from "./Mobile";
import MoveState from "./MoveState";
import tir from "../assets/images/tir.png";

export default class Shoot extends Mobile {

  constructor(x,y,deltaX = 8,deltaY = 0,src = tir) {
    super(x, y, deltaX, deltaY, src);
  }

  collisionWith(obst){
    const A1 = {c1 : obst.x, c2 : obst.y};
    const A2 = {c1 : obst.x+obst.img.width, c2 : obst.y+obst.img.height};
    const P1 = {c1 : Math.max(A1['c1'],this.x), c2 : Math.max(A1['c2'],this.y)};
    const P2 = {c1 : Math.min(A2['c1'],this.x+this.image.width), c2 : Math.min(A2['c2'],this.y+this.image.height)};
    if ((P1['c1']<P2['c1']) && (P1['c2']<P2['c2'])){
      obst.touched = true;
      return true;
    }
    return false;
  }

  detectorCollision(liste){
    let val = false;
    liste
    .filter(saucer => saucer.touched === false)
    .forEach(function(el,index){
      if (this.collisionWith(el)){
        el.deltaX = 0;
        el.deltaY = 3;
        val = true;
      }
    },this);
    return val;
  }
}
