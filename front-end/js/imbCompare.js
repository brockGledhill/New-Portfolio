// MAC MOCK-UP SCROLLER #1
$(".handle").draggable({
    axis: "x",
    containment: "parent",
    drag: function() {
        var position = $(this).position();
        var positionExtra = position.left + 6;
        $(".coverImage").width(positionExtra + "px");
    }
});


// MAC MOCK-UP SCROLLER #2
$(".handle2").draggable({
    axis: "x",
    containment: "parent",
    drag: function() {
        var position = $(this).position();
        var positionExtra = position.left + 6;
        $(".coverImage2").width(positionExtra + "px");
    }
});
