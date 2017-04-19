$('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') || location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
           if (target.length) {
             $('html,body').animate({
                 scrollTop: target.offset().top
            }, 1000);
            return false;
        }
    }
});

$('.toggle-tabs').click(function(e){
  e.preventDefault();

  if($(this).is('.active')){return;}
  $(this).tab('show');

  $(this).siblings('.toggle-tabs').removeClass('active');
  $(this).addClass('active');
});

$('.toggle-tabs').on('shown.bs.tab', function (e) {
  $('.tab-content').addClass('fadeOut');

  setTimeout(function(){
  $('.tab-content').removeClass('fadeOut');
},200);
});
