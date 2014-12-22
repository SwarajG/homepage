"use strict";

$(document).ready(function() {
  carousel();
  successStories();
  iitpricing();
  pricing();
  paper();
  practiceAnim();
});

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

var practiceAnim = function(){
  var path = document.getElementById('fillpath');
  var totalLength = path.getTotalLength();
  var anchorPoints = [1580, 1272, 1068, 1000, 946, 887, 830, 785, 440];
  var fillpath = Snap('#fillpath');
  fillpath.attr({
    "stroke-dasharray": ""+totalLength+" "+totalLength+"",
    "stroke-dashoffset": totalLength
  });

  nextStep(fillpath, anchorPoints, 0, practiceAnimations);

}

var practiceAnimations = function practiceAnimations(fillpath, anchorPoints, index){
  index++;
  if (index == 1) {
    var i = 1;
    var tickInterval = setInterval(function() {
      Snap('#calendar #tick'+i).attr("display", "inline");
      i++;
      if(i > 6) {
        Snap('#tooltip2').attr({'display':'inline'});
        clearInterval(tickInterval);
      }
    }, 100);
    setTimeout(function(){
      Snap('#tooltip2').attr({'display':'none'});
      nextStep(fillpath, anchorPoints, 1, practiceAnimations)
    }, 600)
  }

  if (index == 2) {
    var hand = Snap('#hand1');
    hand.animate({transform: 'r'+[45, [355.4, 291]]}, 1000);
  }
}

var nextStep = function(fillpath, anchorPoints, index, practiceAnimations) {
  fillpath.animate({
    "stroke-dashoffset": anchorPoints[index]
  }, 1000, null, function(){
    practiceAnimations(fillpath, anchorPoints, index);
  });
}