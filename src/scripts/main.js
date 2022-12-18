import theGame from "./Game";

const init = () => {

  theGame.startMoveAndDraw();
  const ctl = document.getElementById("control");
  const elem2 = document.getElementById("nouvelleSoucoupe");

  const elem1 = document.getElementById("flotteSoucoupes");
  const elem = elem1.cloneNode(true);
  elem.id = "stop";
  elem1.addEventListener('click',function(){
    ctl.replaceChild(elem, elem1);
    theGame.startSaucers();
    document.activeElement.blur();
  });
  elem.addEventListener('click',function(){
    ctl.replaceChild(elem1, elem);
    theGame.stop();
  });

  elem2.addEventListener('click',function(){
    theGame.addSaucer();
    document.activeElement.blur();
  });

  window.addEventListener('keydown', theGame.keyDown.bind(theGame));
  window.addEventListener('keyup', theGame.keyUp.bind(theGame));
}

window.addEventListener("load",init);
