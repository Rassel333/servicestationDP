export const amodal = function(){
	$('.station-edit').click(function(){
         $('#overlay1').fadeIn(300,
            function(){
                $('.station-edit_modal')
                    .css('display', 'block')
                    .animate({opacity: 1, top: '50px'}, 200);
        });
    });

    $('#overlay1, .station-edit-modal-button_cancel, .station-edit-modal-button_ok').click(function(e){
        e.preventDefault();
        $('.station-edit_modal')
            .animate({opacity: 0, top: '-750px'}, 200,
                    function(){
                        $(this).css('display', 'none');
                        $('#overlay1').fadeOut(500);
        });
    });

    $('.add-station').click(function(){
         $('#overlay1').fadeIn(300,
            function(){
                $('.station-add_modal')
                    .css('display', 'block')
                    .animate({opacity: 1, top: '50px'}, 200);
        });
    });
    $('#overlay1, .station-add-modal-button_cancel, .station-add-modal-button_ok').click(function(e){
        e.preventDefault();
        $('.station-add_modal')
            .animate({opacity: 0, top: '-750px'}, 200,
                    function(){
                        $(this).css('display', 'none');
                        $('#overlay1').fadeOut(500);
        });
    });

/*-----------------------------------------------------------------*/
$('.service-edit').click(function(){
         $('#overlay2').fadeIn(300,
            function(){
                $('.service-edit_modal')
                    .css('display', 'block')
                    .animate({opacity: 1, top: '50px'}, 200);
        });
    });

    $('#overlay2, .service-edit-modal-button_cancel, .service-edit-modal-button_ok').click(function(e){
        e.preventDefault();
        $('.service-edit_modal')
            .animate({opacity: 0, top: '-550px'}, 200,
                    function(){
                        $(this).css('display', 'none');
                        $('#overlay2').fadeOut(500);
        });
    });

    $('.add-service').click(function(){
         $('#overlay2').fadeIn(300,
            function(){
                $('.service-add_modal')
                    .css('display', 'block')
                    .animate({opacity: 1, top: '50px'}, 200);
        });
    });
    $('#overlay2, .service-add-modal-button_cancel, .service-add-modal-button_ok').click(function(e){
        e.preventDefault();
        $('.service-add_modal')
            .animate({opacity: 0, top: '-550px'}, 200,
                    function(){
                        $(this).css('display', 'none');
                        $('#overlay2').fadeOut(500);
        });
    });




/*-------------------------------------------------------------------------*/

    $('.station-delete').click(function(){
        $('#overlay1').fadeIn(400,
            function(){
                 $('.confirm_modal')
                    .css('display', 'block')
                    .animate({opacity: 1, top: '150px'}, 200);
            })
       
    });

    $('.confirm-modal-button_ok, .confirm-modal-button_cancel, #overlay1').click(function(e){
        e.preventDefault();
        $('.confirm_modal').animate({opacity: 0, top: '-550px'}, 200,
            function(){
                $(this).css('display', 'none');
                $('#overlay1').fadeOut(400);
            });

    });

    $('.service-delete').click(function(){
        $('#overlay2').fadeIn(400,
            function(){
                 $('.confirm_modal')
                    .css('display', 'block')
                    .animate({opacity: 1, top: '150px'}, 200);
            })
       
    });

    $('.confirm-modal-button_ok, .confirm-modal-button_cancel, #overlay2').click(function(e){
        e.preventDefault();
        $('.confirm_modal').animate({opacity: 0, top: '-550px'}, 200,
            function(){
                $(this).css('display', 'none');
                $('#overlay2').fadeOut(400);
            });

    });
/*---------------------------------------------------------------------------------------------------*/

$('.mechanic-edit').click(function(){
        $('#overlay3').fadeIn(400,
            function(){
                $('.mechanic-edit_modal')
                    .css('display', 'block')
                    .animate({opacity: 1, top: '50px'}, 200);
        });
    });
    
    $('#overlay3, .mechanic-edit-modal-button_cancel, .mechanic-edit-modal-button_ok').click(function(e){
        e.preventDefault();
        $('.mechanic-edit_modal')
            .animate({opacity: 0, top: '-400px'}, 200,
                    function(){
                        $(this).css('display', 'none');
                        $('#overlay3').fadeOut(400);
        });
    });
    $('.add-mechanic').click(function(){
         $('#overlay3').fadeIn(400,
            function(){
                $('.mechanic-add_modal')
                    .css('display', 'block')
                    .animate({opacity: 1, top: '50px'}, 200);
        });
    });
    $('#overlay3, .mechanic-add-modal-button_cancel, .mechanic-add-modal-button_ok').click(function(e){
        e.preventDefault();
        $('.mechanic-add_modal')
            .animate({opacity: 0, top: '-550px'}, 200,
                    function(){
                        $(this).css('display', 'none');
                        $('#overlay3').fadeOut(400);
        });
    });

/*-----------------------------------------------------*/
    $('.mechanic-delete').click(function(){
        $('#overlay3').fadeIn(400,
            function(){
                 $('.confirm_modal')
                    .css('display', 'block')
                    .animate({opacity: 1, top: '150px'}, 200);
            })
       
    });

    $('.confirm-modal-button_ok, .confirm-modal-button_cancel, #overlay').click(function(e){
        e.preventDefault();
        $('.confirm_modal').animate({opacity: 0, top: '-550px'}, 200,
            function(){
                $(this).css('display', 'none');
                $('#overlay3').fadeOut(400);
            });

    })



}