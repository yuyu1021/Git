(function($) {
    window.test= window.test || {};

    $(function() {
        test.initLandingPage();
    });

    test = {
  		/* 一般初始化接口 */ 
      init: function() {
          console.log('123')
          console.log('456')
          console.log('789')
      }
    };
    window.test = test;
   

})(jQuery);