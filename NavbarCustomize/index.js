$(document).ready(()=> {
    var isMenuExpaned = true;
    $('#tabs-nav li:first-child').addClass('active');
    $('.tab-content').hide();
    $('.tab-content:first').show();


    $.fn.expandedMenu = function() {
        $('.menu-wrapper li:nth-last-child(1) a i').addClass('show-menu-expanded');
        $('.menu-customize__tabs').css({'max-height':'200px', 'overflow': 'auto'});
    }

    $.fn.hideMenu = function() {
        $('.menu-customize__tabs').css({'max-height':'0', 'overflow': 'hidden'});
        $('.menu-wrapper li:nth-last-child(1) a i').removeClass('show-menu-expanded');
    }

    $('.menu-wrapper li:nth-last-child(1)').click(() => {
        isMenuExpaned = !isMenuExpaned
        if(isMenuExpaned) {
            $().expandedMenu();
        } else {
            $().hideMenu();
        }
           
    })
    // Click function
    $('#tabs-nav li').click(function(){
        $('#tabs-nav li').removeClass('active');
        $(this).addClass('active');
        $('.tab-content').hide();
        
        var activeTab = $(this).find('a').attr('href')
        $(activeTab).fadeIn();
        return false;
    });
})