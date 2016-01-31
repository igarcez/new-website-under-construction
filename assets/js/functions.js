(function($) {
  $(function() {
    $(".modal-link").click(function(e) {
      var modal;
      modal = $(this).attr('href');
      $(modal).fadeToggle();
      e.preventDefault();
    });
    $(".modal-close").click(function(e) {
      $(this).parent().fadeToggle();
    });
  });
})(jQuery);
