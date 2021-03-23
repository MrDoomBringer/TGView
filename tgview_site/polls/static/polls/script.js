$(document).ready(function(){       
    var scroll_pos = 0;
    /*var positions = [];
    $("a").each(function(){
        positions.push($(this).offset().top - $(window).scrollTop());
    })
    setup(positions);
    */
    setup();
    $(document).scroll(function() {
        scroll_pos = $(this).scrollTop();
        nav_class = ".nav"
        nav_button_class = ".navbutton"
        scroll_height = $(window).height();
        nav_circle_class = ".nav_circle";
        total_height = document.body.scrollHeight;
        //$(nav_circle_class).css('top', (scroll_pos*80)/total_height+'%');
        scroll_circle();
        if(scroll_pos < scroll_height) {
            //$(nav_class).css('border', 'none');
            //$(nav_class).css('background-color', 'transparent');
            $(nav_circle_class).css('background-color', 'white');
            $(nav_button_class).css('color', 'white');
            //$(nav_class).css('border', '1px solid transparent');
            
        }else if (scroll_pos > scroll_height * 2) {
            //$(nav_class).css('background-color', 'white');
            $(nav_circle_class).css('background-color', '#E06C75');
            $(nav_button_class).css('color', '#E06C75');
        }
        else if(scroll_pos > scroll_height) {
            //$(nav_class).css('border', '1px solid #ABB2BF');
            //$(nav_class).css('background-color', '#282C34');
            $(nav_circle_class).css('background-color', 'white');
            $(nav_button_class).css('color', 'white');
        } 
    });
});