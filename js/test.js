var testAnim = function(){
  var path4 = document.querySelector('.test #fillpath');
  var totalLength4 = path4.getTotalLength();
  var anchorPoints4 = [1249, 884, 542, 10 , 0];
  var fillpath4 = Snap('.test #fillpath');
  fillpath4.attr({
    "stroke-dasharray": ""+totalLength4+" "+totalLength4+"",
    "stroke-dashoffset": totalLength4
  });
  nextStep(fillpath4, anchorPoints4, 0, testAnimations);
}

var testAnimations = function testAnimations(fillpath4 , anchorPoints4 , index4){
	index4++;
	if(index4 == 1){
    var x = 1;
    var bubble = setInterval(function(){
      //Snap("#thought_bubble"+x).attr({"display":"inline"});
      x++;
      if(x > 2){
        clearInterval(bubble);
      }
    } ,500);
		nextStep(fillpath4, anchorPoints4, index4, testAnimations);
	} 
	if(index4 == 2){
    var x = 1;
    var graph = setInterval(function(){
      if(x == 1){
        Snap("#graph-arrow").attr({"display":"inline"});
      }else {
        //Snap("#graph_points").attr({"display":"inline"});
        clearInterval(graph);
      }
      x++;  
    } , 500);
    nextStep(fillpath4, anchorPoints4, index4, testAnimations);
	}
	if(index4 == 3){
    Snap("#wave").attr({"display":"inline"});
    nextStep(fillpath4, anchorPoints4, index4, testAnimations);
	}
	if(index4 == 4){
    nextStep(fillpath4, anchorPoints4, index4, testAnimations);
	}
}

var nextStep = function(fillpath4, anchorPoints4, index4, testAnimations) {
  fillpath4.animate({
    "stroke-dashoffset": anchorPoints4[index4]
  }, 1000, null, function(){
    testAnimations(fillpath4, anchorPoints4, index4);
  });
}