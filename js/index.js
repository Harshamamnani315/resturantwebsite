$(document).ready(function(){
$('.navbar-toggler').click(function (){
    $('.navbar-toggler').toggleclass('change')
})

    $("#header, .info").ripples({
        dropRadius: 25,
        peturbance: 0.6,
    });
    
  var magnificPopup = $.magnificPopup.instance;

$.magnificPopup.instance.next = function() {
    var i = magnificPopup.index;
    var num = magnificPopup.items;

    if(num > i){
        $.magnificPopup.proto.next.call(this /*, optional arguments */);
    }
    else{
        magnificPopup.close();
    }
};
});
