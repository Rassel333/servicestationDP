$(document).ready(function(){
    $('.mobile-signup-index').click(function(e){
        e.preventDefault();
        $('#overlay').fadeIn(350,
            function(){
                $('.signup_modal-index')
                    .css('display', 'block')
                    .animate({opacity: 1, top: '50px'}, 300);
        });
    });
    
    $('#overlay').click(function(){
        $('.signup_modal-index')
            .animate({opacity: 0, top: '-400px'}, 300,
                    function(){
                        $(this).css('display', 'none');
                        $('#overlay').fadeOut(300);
        });
    });
});