
var practiceAnim = function(){
  var path1 = document.querySelector('.practice #fillpath');
  var totalLength1 = path1.getTotalLength();
  var anchorPoints1 = [1580, 1272, 1068, 1000, 946, 887, 830, 785, 440 , 0];
  var fillpath1 = Snap('.practice #fillpath');
  fillpath1.attr({
    "stroke-dasharray": ""+totalLength1+" "+totalLength1+"",
    "stroke-dashoffset": totalLength1
  });

  nextStep(fillpath1, anchorPoints1, 0, practiceAnimations);

}

var practiceAnimations = function practiceAnimations(fillpath1, anchorPoints1, index1){
  index1++;
  if (index1 == 1) {
    var i = 1;
    var tickInterval = setInterval(function() {
      Snap('#calendar #tick'+i).attr("display", "inline");
      i++;
      if(i > 6) {
        Snap('#tooltip_x5F_1').attr({'display':'inline'});
        clearInterval(tickInterval);
      }
    }, 100);
    setTimeout(function(){
      Snap('#tooltip_x5F_1').attr({'display':'none'});
      nextStep(fillpath1, anchorPoints1, 1, practiceAnimations)
    }, 600)
  }

  if (index1 == 2) {
    var x = 1;
    var hand = Snap('#hand1');
    var clock = setInterval(function(){
      if(x == 1){
        hand.animate({transform: 'r'+[45, [470.63, 311.1]]}, 1000);
      }else if(x == 2){
        Snap("#one").attr({"display":"inline"});
      }else if(x == 3){
        Snap("#two").attr({"display":"inline"});
      }else {
        Snap("#three").attr({"display":"inline"});
        nextStep(fillpath1, anchorPoints1, index1, practiceAnimations)
        clearInterval(clock);
      }
      x++;
    } , 200);
  }

  if(index1 == 3){
    Snap("#yellow").attr({"fill" : "#FFF000"});
    Snap("#glow").attr({"display" : "inline"});
    nextStep(fillpath1, anchorPoints1, index1, practiceAnimations);
  }

  if(index1 == 4){
    var index1_circle = 1;
    var x = setInterval(function(){
      if(index1_circle < 6){
        colorCircle(index1_circle);
        nextStep(fillpath1, anchorPoints1, index1, practiceAnimations)
        index1_circle++;
        index1++;
      }else {
        clearInterval(x);
      }
    } , 800)
  }

  if(index1 == 9){
    var x =1;
    var a = setInterval(function(){
      if(x == 1){
        Snap("#bubble2_1_").attr({"display":"inline"});
      } else if (x ==2 ) {
        Snap("#bubble1").attr({"display":"inline"});
      } else{
        Snap("#tooltip_x5F_5").attr({"display":"inline"});
        nextStep(fillpath1, anchorPoints1, index1, practiceAnimations)
      }
      x++;
    } , 200);
  }
}


var colorCircle = function colorCircle(index1_circle){
  if(index1_circle == 3){
    Snap("#circle"+index1_circle).attr({fill:'#F15F54'});
    Snap("#tooltip_x5F_3").attr({"display":"inline"});
  }else {
    Snap("#circle"+index1_circle).attr({fill:'#29D366'});
  }  
}

var nextStep = function(fillpath1, anchorPoints1, index1, practiceAnimations) {
  fillpath1.animate({
    "stroke-dashoffset": anchorPoints1[index1]
  }, 1000, null, function(){
    practiceAnimations(fillpath1, anchorPoints1, index1);
  });
}