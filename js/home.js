$(document).ready(function() {
  carousel();
  successStories();
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