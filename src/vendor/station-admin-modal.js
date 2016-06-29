export const stadminmodal =  function (){ 
    $('.mechanic-edit').click(function(){
        $('#overlay').fadeIn(400,
            function(){
                $('.mechanic-edit_modal')
                    .css('display', 'block')
                    .animate({opacity: 1, top: '50px'}, 200);
        });
    });
    
    $('#overlay, .mechanic-edit-modal-button_cancel, .mechanic-edit-modal-button_ok').click(function(e){
        e.preventDefault();
        $('.mechanic-edit_modal')
            .animate({opacity: 0, top: '-400px'}, 200,
                    function(){
                        $(this).css('display', 'none');
                        $('#overlay').fadeOut(400);
        });
    });
    $('.add-button-admin').click(function(){
         $('#overlay').fadeIn(400,
            function(){
                $('.mechanic-add_modal')
                    .css('display', 'block')
                    .animate({opacity: 1, top: '50px'}, 200);
        });
    });
    $('#overlay, .mechanic-add-modal-button_cancel, .mechanic-add-modal-button_ok').click(function(e){
        e.preventDefault();
        $('.mechanic-add_modal')
            .animate({opacity: 0, top: '-550px'}, 200,
                    function(){
                        $(this).css('display', 'none');
                        $('#overlay').fadeOut(400);
        });
    });

/*-----------------------------------------------------*/
    $('.mechanic-delete').click(function(){
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