var Pokeball = function(){
  var div = document.getElementsByClassName("pokeball")[0];
  this.create = function(){
    for (var i=0; i<18; i++){
      for (var j=0; j<9; j++){
        var d = document.createElement("div");
        if (i>9){
          d.className = "red";
        }
        else if (i === 0 || i === 9){
          d.className = "black";
        } 
        else {
          d.className = "white";
        }       
        d.style.transform ="rotateX("+j*20+"deg) rotateY("+i*20+"deg) translateZ(57px) ";
        div.appendChild(d);
      }
    }
    var ballbtn = document.createElement("div");
    ballbtn.className = "ballbtn";
    div.appendChild(ballbtn);
  }
}
var ball = new Pokeball();
ball.create();