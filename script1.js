  $(function() {
    function bis() {
      $('#balle').animate({left: '+=200'}, 'slow')
                 .animate({top: '+=200'}, 'slow')
                 .animate({left: '-=200'}, 'slow')
                 .animate({top: '-=200'}, 'slow', bis);
    };
    bis();
  });