$(document).ready(function(){
    //global vars
    //simple list of all characters, no timeline pos/rot stuff
    var charList = [];
    
    //timeline and position stuff
    pos_timeline();
    
    //might have to move add_character elsewhere after the popup window
    add_character();
    
    //popup buttons make the popup window.. well... POP UP! *imagine that*
    popup_buttons();
})

function pos_timeline(){
    $("#timeline").mousedown(function(pageInfo){
        //grab click location X and offset off of it 191px for position relative to div and + 9 for margin-left offset
        var posX = pageInfo.pageX - 191;
        var posY = pageInfo.pageY;
        
        //set cursor if click height limit > 1169
        if( posY > 1169 ){
            //further check to make sure not extreme left or extreme right
            if( posX < 8 ){
                posX = 8;
            }
            else if( posX > 2168 ){
                posX = 2168;
            }
            else{
                //do nothing
            }
            
            //margin-left position of timelinecursor
            $("#timelinecursor").css("margin-left",posX + 1);
            
            //change number on cursor
            var cursorNum = posX - 8;
            cursorNum = Math.round( cursorNum / 1.5 );
            $("#frameoutnumber").html(cursorNum);
        }
        
        console.log(posX);
    });
    console.log("h");
}

function add_character(){
    $("#addcharacterbutton").mousedown(function(){
        $("#charlistul").append("<li class='nav-list'><h4 class='nav-text'>Character </h4></li>");
    });
}

function popup_buttons(){
    //if you click outside the popup window aka on the window backer, hide the whole section
    $("#popup-window-backer").click(function(){
        $(this).hide();
        $("#popup-window").hide();
    });
    
    //click on hotkey button
    $("#hotkeybutton").click(function(){
        popup_buttons_load("#hotkey-pop");
    });
    
    //click on char builder
    $("#charbuilderbutton").click(function(){
        popup_buttons_load("#charbuilder-pop");
    });
    
    //click on debug
    $("#debugbutton").click(function(){
        popup_buttons_load("#debug-pop");
    });
    
    //click on render
    $("#actualrenderbutton").click(function(){
        popup_buttons_load("#render-pop");
    });
    
    //click on slide-bg
    $("#addsceneryslide").click(function(){
        popup_buttons_load("#slide-bg-pop");
    });
    
    //click on main-bg
    $("#addscenerymain").click(function(){
        popup_buttons_load("#main-bg-pop");
    });
    
    //click on charpanel + button
    $("#addcharacterbutton").click(function(){
        popup_buttons_load("#charpanel-pop");
    });
}

function popup_buttons_load(fileToLoad){
    //show both the popup window and backer
    $("#popup-window-backer").show();
    $("#popup-window").show();
    
    //popup-hide-class is used to hide all the sections within
    $(".popup-hide-class").hide();
    
    //show the specific section
    $(fileToLoad).show();
}