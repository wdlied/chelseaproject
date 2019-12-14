$(function() {
    var $btns = $('.btn').click(function() {
        console.log(this.id);
        if (this.id == 'all') {
          $('#ct > div').show();
        } else {
          var $el = $('.' + this.id).show();
          $('#ct > div').not($el).hide();
        }
        $btns.removeClass('active');
        $(this).addClass('active');
    });

});