var next_position;
var position_list;
var nav_buttons;
var a_marks;

var circle;
function setup()
{
    circle  = document.getElementsByClassName("nav_circle");
    a_marks = document.getElementsByTagName("hr");
    nav_buttons = document.getElementsByClassName("navbutton");
    position_list = [];
    next_position = 0;
    var bodyRect = document.body.getBoundingClientRect();
    for (a_tag of a_marks)
    {
        var local_position = a_tag.getBoundingClientRect();
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        position_list.push(local_position.top - bodyRect.top);
    }
    console.log(position_list);
}

function scroll_circle(){
    var prev = 0;
    var prev_nav_button;
    var current_pos = window.scrollY;
    for (var i=0; i < position_list.length; i++)
    {
        var position = position_list[i];
        console.log(current_pos + " " + position);
        if (current_pos < position)
        {
            if (i > 0)
                prev = position_list[i-1];
            next_position = position;
            prev_nav_button = i;//nav_buttons[i];
            break;
        }
    }
    

    if (prev_nav_button){
        console.log(next_position + ": :" + prev);
        var range = next_position - prev;
        next_position -= prev;
        current_pos -= prev;
        
        console.log(next_position + "::::" + current_pos);
        var percent = current_pos / next_position;
        console.log(">>" + percent);
        /*
        var bodyRect = document.body.getBoundingClientRect();
        var nav_pos = prev_nav_button.getBoundingClientRect();
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        var start = nav_pos.top - bodyRect.top;
        */
       //var start = prev_nav_button.style.top;
        var start = prev_nav_button * 40;
       console.log(">>>>" + start);
        circle[0].style.top = start + (percent * 40) + "px";    
        console.log(circle[0].style.top);
    }

}