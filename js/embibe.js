"use strict";

$(document).ready(function() {
  carousel();
  successStories();
  iitpricing();
  pricing();
  paper();
  practiceAnim();
  analyseAnim();
  reviseAnim();
  testAnim();
  pricing_box();
});

//Carosusal in About us page
var carousel = function carousel(){
  $('#carousel_ul li:first').before($('#carousel_ul li:last'));
  $('#right_scroll i').click(function(){
    var item_width = $('#carousel_ul li').outerWidth() + 10;
    var left_indent = parseInt($('#carousel_ul').css('left')) - item_width;
    $('#carousel_ul:not(:animated)').animate({'left' : left_indent},500,function(){
        $('#carousel_ul li:last').after($('#carousel_ul li:first'));
        $('#carousel_ul').css({'left' : '-1290px'});
    });
  });

  $('#left_scroll i').click(function(){
    var item_width = $('#carousel_ul li').outerWidth() + 10;
    var left_indent = parseInt($('#carousel_ul').css('left')) + item_width;
    $('#carousel_ul:not(:animated)').animate({'left' : left_indent},500,function(){
    $('#carousel_ul li:first').before($('#carousel_ul li:last'));
    $('#carousel_ul').css({'left' : '-1290px'});
    });
  });
}
//Successful students bricks code

var successStories = function successStories() {
  $('.successful-student__block').each(function(){
    var $this = $(this);
    var i = 0;
    var studentHeight = $this.find('.successful-student__student').height();
    var randomInterval = 600 + Math.random() * 300;
    var randomNumber =  Math.ceil(Math.random()*10);
    var rows = $this.data('rows');
    var air = $this.find('.air');
    var AIR = parseInt(air.text());
    var anim = setInterval(function(){
      var brick = $('<div>')
        .addClass('successful-student__brick')
        .css({
          right: 60*(i%4)
        });
      $this.append(brick);
      brick.animate({
          bottom: (studentHeight + Math.floor(i/4)*30),
          opacity: 1
        }, 1200, function(){
          brick.addClass('successful-student__brick--dark')
            .html('+' + randomNumber*10);
          setTimeout(function(){
            brick.removeClass('successful-student__brick--dark')
              .html('');
            AIR = AIR - randomNumber*10;
            air.html(AIR);
          }, 500);
        });
        air.animate({
            color: '#00B1EC',
            bottom: '400px',
            fontsize:'20px'
        } , 2000);
      i++;
      if(i == 4*rows) {
        clearInterval(anim);
      }
    }, randomInterval);
  })
}

//IIT page Tabs
var iitpricing = function iitpricing(){
  $("#tab-content__all-exams").click(function(){
    $("#pricing_details__pserise").html('Rs. 11,999');
    $("#pricing_details__combo").html('Rs. 13,999');
    $("#pricing_details__testserise").html('Rs. 7,999');
  });
  $("#tab-content__iit-jee").click(function(){
    $("#pricing_details__pserise").html('Rs. 12,999');
    $("#pricing_details__combo").html('Rs. 13,999');
    $("#pricing_details__testserise").html('Rs. 14,999');
  });
   $("#tab-content__bitsat").click(function(){
    $("#pricing_details__pserise").html('Rs. 15,999');
    $("#pricing_details__combo").html('Rs. 16,999');
    $("#pricing_details__testserise").html('Rs. 17,999');
  });

  $("#series-price__list-link-practice-2").click(function(){
    $("#series-price__list-link-practice-2").addClass("series-price__list-link--active");
    $("#series-price__list-link-practice-1").removeClass("series-price__list-link--active");
  });
  $("#series-price__list-link-practice-1").click(function(){
    $("#series-price__list-link-practice-1").addClass("series-price__list-link--active");
    $("#series-price__list-link-practice-2").removeClass("series-price__list-link--active");
  });
  $("#series-price__list-link-combo-2").click(function(){
    $("#series-price__list-link-combo-2").addClass("series-price__list-link--active");
    $("#series-price__list-link-combo-1").removeClass("series-price__list-link--active");
  });
  $("#series-price__list-link-combo-1").click(function(){
    $("#series-price__list-link-combo-1").addClass("series-price__list-link--active");
    $("#series-price__list-link-combo-2").removeClass("series-price__list-link--active");
  });
  $("#series-price__list-link-test-2").click(function(){
    $("#series-price__list-link-test-2").addClass("series-price__list-link--active");
    $("#series-price__list-link-test-1").removeClass("series-price__list-link--active");
  });
  $("#series-price__list-link-test-1").click(function(){
    $("#series-price__list-link-test-1").addClass("series-price__list-link--active");
    $("#series-price__list-link-test-2").removeClass("series-price__list-link--active");
  });

}

//2 year or 1 year tabs changing Pricing tables

var pricing = function pricing(){
  $("#price-detail-box__list-link-practice-2").click(function(){
    $("#price-detail-box__list-link-practice-2").addClass("price-detail-box__list-link--active");
    $("#price-detail-box__list-link-practice-1").removeClass("price-detail-box__list-link--active");
  });
  $("#price-detail-box__list-link-practice-1").click(function(){
    $("#price-detail-box__list-link-practice-1").addClass("price-detail-box__list-link--active");
    $("#price-detail-box__list-link-practice-2").removeClass("price-detail-box__list-link--active");
  });
  $("#price-detail-box__list-link-combo-2").click(function(){
    $("#price-detail-box__list-link-combo-2").addClass("price-detail-box__list-link--active");
    $("#price-detail-box__list-link-combo-1").removeClass("price-detail-box__list-link--active");
  });
  $("#price-detail-box__list-link-combo-1").click(function(){
    $("#price-detail-box__list-link-combo-1").addClass("price-detail-box__list-link--active");
    $("#price-detail-box__list-link-combo-2").removeClass("price-detail-box__list-link--active");
  });
  $("#price-detail-box__list-link-test-2").click(function(){
    $("#price-detail-box__list-link-test-2").addClass("price-detail-box__list-link--active");
    $("#price-detail-box__list-link-test-1").removeClass("price-detail-box__list-link--active");
  });
  $("#price-detail-box__list-link-test-1").click(function(){
    $("#price-detail-box__list-link-test-1").addClass("price-detail-box__list-link--active");
    $("#price-detail-box__list-link-test-2").removeClass("price-detail-box__list-link--active");
  });

}

//papers IIT JEE
var paper = function paper() {
  $('.paper__list-year').click(function(){
    $(this).addClass('paper__list-year--active').siblings().removeClass('paper__list-year--active');
  })
}


//Prcing page Price tables
var pricing_box = function pricing_box(){
 function close_accordion_section() {
    $('.accordion .accordion-section-title').removeClass('active');
    $('.accordion .accordion-section-content').slideUp(300).removeClass('open');
  }

  $('.accordion-section-title').click(function(e) {
    // Grab current anchor value
    var currentAttrValue = $(this).attr('href');

    if($(e.target).is('.active')) {
        close_accordion_section();
    }else {
        close_accordion_section();

        // Add active class to section title
        $(this).addClass('active');
        // Open up the hidden content panel
        $('.accordion ' + currentAttrValue).slideDown(300).addClass('open');
    }
    e.preventDefault();
  });
};var analyseAnim = function(){
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