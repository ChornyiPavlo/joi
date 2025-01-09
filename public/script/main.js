$(document).ready(function() {

    $('.fanboxy').each(function() {
        $(this).attr('href', $(this).children('img').attr('src'));
    });
    $('.fanboxy').fancybox();


    let randomColor = $('#randomColor').attr('class');
    let randomShadow = $('#randomShadow').attr('class');

    if(randomColor == '#ffffff'){
        $('.header--block img').css('box-shadow','0px 0px '+randomShadow+' #333333');
    }else{
        $('.header--block img').css('box-shadow','0px 0px '+randomShadow+' #959595');
    }

    if($('.header--block .row').hasClass('flex-column-reverse')){
        $('.header--block .row').css('gap','40px');
        $('.header--block .col').css('text-align','center');
    }

    if($('.main--box').css('flex-direction') == 'column'){
        $('.gal--box').css('padding-top','0px');
    }else{
        $('.content--box').css('padding-top','0px');
    }

    if($('.mntbn').hasClass('btnWise')){
        $('.callout--box .row').css({'flex-direction':'column-reverse'});
    }

});

document.addEventListener('DOMContentLoaded', function() {
    const mpElement = document.querySelector('.mp');
    const myHeight = mpElement.naturalHeight;
    const myWidth = mpElement.naturalWidth;

    if (myHeight === myWidth) {
        if (myWidth > 600) {
            mpElement.style.width = '50%';
        }
    } else if (myHeight > myWidth) {
        const mainPicBox = document.querySelector('.mainPic--box');
        mainPicBox.style.display = 'flex';
        mainPicBox.style.alignItems = 'center';
        mainPicBox.style.justifyContent = 'center';
        if (myHeight < 2300 && myHeight > 700) {
            mpElement.style.width = '25%';
            mpElement.style.height = 'auto';
        } else if (myHeight < 700 && myHeight > 500) {
            mpElement.style.width = '50%';
        }
    }
});
