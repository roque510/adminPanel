$( document ).ready(function() {
    $( "nav li" ).hover(function(){
        $(this).addClass("active");
    },function(){
        $(this).removeClass("active");
    });

        $( ".menuBox li" ).hover(function(){
        $(this).addClass("active");
    },function(){
        $(this).removeClass("active");
    });
});