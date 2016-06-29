export const pmodal =  function (){ 
    $('.personal-edit').click(function(){
        $('#overlay').fadeIn(400,
            function(){
                $('.personal-edit_modal')
                    .css('display', 'block')
                    .animate({opacity: 1, top: '50px'}, 200);
        });
    });
    
    $('#overlay, .personal-edit-modal-button_cancel, .personal-edit-modal-button_ok').click(function(e){
        e.preventDefault();
        $('.personal-edit_modal')
            .animate({opacity: 0, top: '-400px'}, 200,
                    function(){
                        $(this).css('display', 'none');
                        $('#overlay').fadeOut(400);
        });
    });
    $('.car-edit').click(function(){
         $('#overlay').fadeIn(400,
            function(){
                $('.car-edit_modal')
                    .css('display', 'block')
                    .animate({opacity: 1, top: '50px'}, 200);
        });
    });
    $('#overlay, .car-edit-modal-button_cancel, .car-edit-modal-button_ok').click(function(e){
        e.preventDefault();
        $('.car-edit_modal')
            .animate({opacity: 0, top: '-550px'}, 200,
                    function(){
                        $(this).css('display', 'none');
                        $('#overlay').fadeOut(400);
        });
    });
    $('.add-car-profile').click(function(){
         $('#overlay').fadeIn(400,
            function(){
                $('.car-add_modal')
                    .css('display', 'block')
                    .animate({opacity: 1, top: '50px'}, 200);
        });
    });
    $('#overlay, .car-add-modal-button_cancel, .car-add-modal-button_ok').click(function(e){
        e.preventDefault();
        $('.car-add_modal')
            .animate({opacity: 0, top: '-550px'}, 200,
                    function(){
                        $(this).css('display', 'none');
                        $('#overlay').fadeOut(400);
        });
    });

/*-----------------------------------------------------*/
    $('.car-delete').click(function(){
        $('#overlay').fadeIn(400,
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
                $('#overlay').fadeOut(400);
            });

    })
    
    

};