(function($) {
    window.test= window.test || {};

    $(function() {
        test.initLandingPage();
    });

    test = {
  		/* 一般初始化接口 */ 
      init: function() {
          console.log('123')
          console.log('123')
      }
    };
    window.test = test;
   

})(jQuery);