var reviseAnim = function(){
  var path3 = document.querySelector('.revise #fillpath');
  var totalLength3 = path3.getTotalLength();
  var anchorPoints3 = [1724, 1498, 1210, 412 ,0];
  var fillpath3 = Snap('.revise #fillpath');
  fillpath3.attr({
    "stroke-dasharray": ""+totalLength3+" "+totalLength3+"",
    "stroke-dashoffset": totalLength3
  });
  nextStep(fillpath3, anchorPoints3, 0, reviseAnimations)
}

var reviseAnimations = function reviseAnimations(fillpath3 , anchorPoints3 , index3){
  index3++;
  if(index3 == 1){
    var x = 1;
    var points_arrow = setInterval(function(){
      if(x == 1){
        Snap("#lines").attr({"display":"inline"});
      }else if(x == 2) {        
        Snap("#points").attr({"display":"inline"});
      }else if(x == 3){
        Snap("#tooltip1_1_").attr({"display":"inline"});
      }
      x++;
    } ,500);
    nextStep(fillpath3, anchorPoints3, index3, reviseAnimations)
  }
  if(index3 == 2){
    var clip = Snap("#upper-clip");
    var rotate = -15;
    var x = 1;
    var clip_interval = setInterval(function(){
      if(x == 1){
        clip.animate({transform:'r'+rotate+",399.46,299.77"},300);
      }else if(x == 2){
        clip.animate({transform:'r'+0+",399.46,299.77"} ,300);
      }
      else{
        Snap("#rays").attr({"display":"inline"});
        Snap("#tooltip_x5F_2").attr({"display":"inline"});
        nextStep(fillpath3, anchorPoints3, index3, reviseAnimations)
        clearInterval(clip_interval);
      }
      x++;
    } ,500);
  }
  if(index3 == 3){
    Snap("#tooltip_x5F_3").attr({"display":"inline"});    
    nextStep(fillpath3, anchorPoints3, index3, reviseAnimations)
  }
  if(index3 == 4){
    var x = 1;
    var bi = setInterval(function(){
      if(x == 1 ){
        Snap("#bite1").attr({"display":"inline"});
      }else {
        Snap("#bite2").attr({"display":"inline"});
        nextStep(fillpath3, anchorPoints3, index3, reviseAnimations)
        clearInterval(bi);
      }
      x++;
    } ,500);
  }
}

var nextStep = function(fillpath3, anchorPoints3, index3, reviseAnimations) {
  fillpath3.animate({
    "stroke-dashoffset": anchorPoints3[index3]
  }, 1000, null, function(){
    reviseAnimations(fillpath3, anchorPoints3, index3);
  });
}