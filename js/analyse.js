var analyseAnim = function(){
  var path2 = document.querySelector('.analyse #fillpath');
  var totalLength2 = path2.getTotalLength();
  var anchorPoints2 = [1513, 1154, 927, 697, 483,0];
  var fillpath2 = Snap('.analyse #fillpath');
  fillpath2.attr({
    "stroke-dasharray": ""+totalLength2+" "+totalLength2+"",
    "stroke-dashoffset": totalLength2
  });
  nextStep(fillpath2, anchorPoints2, 0, analyseAnimations);
}

var analyseAnimations = function analyseAnimations(fillpath2 , anchorPoints2 , index2){
	index2++;
	if(index2 == 1){
    Snap("#tooltip1").attr({"display":"inline"});
    Snap("#run").attr({"width":""});
    nextStep(fillpath2, anchorPoints2, index2, analyseAnimations);
	}

	if(index2 == 2){
    var x = 1;
    var sparkle_interval = setInterval(function(){
      Snap("#sparkle_x5F_"+x).attr({"display":"inline"});
      x++;
      if(x > 3) {
        clearInterval(sparkle_interval);
      }
    } , 200);
    nextStep(fillpath2, anchorPoints2, index2, analyseAnimations);
	}

	if(index2 == 3){
    var glass1 = Snap("#glass1");
    var glass = Snap("#glass");
    var rotate  = -45;
    glass1.animate({transform:'r'+rotate+",305.34,385.07"},500);
    glass.animate({transform:'r'+(45)+",305.34,342.49"},500);
    glass.attr({"display":"inline"});
    Snap("#tooltip3").attr({"display":"inline"});
    nextStep(fillpath2, anchorPoints2, index2, analyseAnimations);
	}

	if(index2 == 4){
    var line = Snap("#s_x5F_line");
    var left = Snap("#w_x5F_l");
    var right= Snap("#w_x5F_r");
    ro(line , left , right ,ro);
    nextStep(fillpath2, anchorPoints2, index2, analyseAnimations);
	}

	if(index2 == 5){
    var p = 1;
    var ab = setInterval(function(){
      Snap("#plus"+p).attr({"display":"inline"});
      p++;
      if(p > 4) {
        nextStep(fillpath2, anchorPoints2, index2, analyseAnimations);
        clearInterval(ab);
      }
    } , 200);
    Snap("#tooltip5").attr({"display":"inline"});
	}
}

var ro = function ro(line , left , right){
  line.animate({transform:'r'+(25)+",151.7 , 469.4"} ,300);
  left.animate({transform:'t0,-10'},300);
  right.animate({transform:'t0,10'},300);
}

var nextStep = function(fillpath2, anchorPoints2, index2, analyseAnimations) {
  fillpath2.animate({
    "stroke-dashoffset": anchorPoints2[index2]
  }, 1000, null, function(){
    analyseAnimations(fillpath2, anchorPoints2, index2);
  });
}