dirR = "+=2";
dirL = "+=2";

function moveDir() {
if (Math.random() > 0.95) {
  swapDirL();
}
if (Math.random() < 0.05) {
  swapDirR();
}
}

function swapDirL() {
    if(dirL == "+=2") {
        dirL = "-=2";
    }
    else {
      dirL = "+=2";   
    }
}

function swapDirR() {
    dirR == "+=2" ? dirR = "-=2" : dirR = "+=2";   
}


setInterval (function() { $("#d").css("left", dirL); $("#d").css("top", dirR); moveDir(); } , 50)