$(document).ready(()=> {
    var isMenuExpaned = false;
    $('#tabs-nav li:first-child').addClass('active');
    $('.tab-content').hide();
    $('.tab-content:first').show();


    $.fn.expandedMenu = function() {
        $('.menu-wrapper li:nth-last-child(1) a i').addClass('show-menu-expanded');
        $('.menu-customize__tabs').css({'max-height':'200px'});
    }

    $.fn.hideMenu = function() {
        $('.menu-customize__tabs').css({'max-height':'0'});
        $('.menu-wrapper li:nth-last-child(1) a i').removeClass('show-menu-expanded');
    }

    $('.toggle-list-city').click(() => {
        isMenuExpaned = !isMenuExpaned
        if(isMenuExpaned) {
            $().expandedMenu();
        } else {
            $().hideMenu();
        } 
    })

    $('#tabs-nav li').click(function(){
        $('#tabs-nav li').removeClass('active');
        $(this).addClass('active');
        $('.tab-content').hide();
        
        var activeTab = $(this).find('a').attr('href')
        $(activeTab).fadeIn();
        return false;
    });
})