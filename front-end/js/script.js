// Scroll to Element with Logo and Title Animations \\
$('a[href*="#"]:not([href="#"])').click(function() {

    // Logo and Title \\
    $("#main-logo").fadeOut(1000);
    $(".name-container").animate({"margin-left": "-25px"}, 2000);
    $(".title").animate({"margin-left": "-80px"}, 1000);
    $("header").addClass("header-overlay", function() {
      $(this).fadeIn(2000);
    });
    $("#header-logo").delay(500).fadeIn(2000);
    
    // Scroll \\
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
            $('html,body').delay(1500).animate({scrollTop: target.offset().top}, 1500);
            return false;
        }
    }
});

// Active Nav Tabs \\
$('.toggle-tabs').click(function(e) {
    e.preventDefault();

    if ($(this).is('.active')) {
        return;
    }
    $(this).tab('show');

    $(this).siblings('.toggle-tabs').removeClass('active');
    $(this).addClass('active');
});

$('.toggle-tabs').on('shown.bs.tab', function(e) {
    $('.tab-content').addClass('fadeOut');

    setTimeout(function() {
        $('.tab-content').removeClass('fadeOut');
    }, 200);
});
