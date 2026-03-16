$(function(){

    let index = 0;
    let slides = $(".slide");

    setInterval(function(){

        slides.eq(index).removeClass("active");

        index++;

        if(index >= slides.length){
            index = 0;
        }

        slides.eq(index).addClass("active");

    },4000);

    /* ふわっと表示 */
    $(window).on('scroll', function(){

        $('.show-area img').each(function(){

            const imgTop = $(this).offset().top;
            const scroll = $(window).scrollTop();
            const windowHeight = $(window).height();

            if(scroll > imgTop - windowHeight + 100){
                $(this).addClass('show');
            }

        });

    });

    /* TOPへ戻る */

    $(".totop").click(function(){

        $("html,body").animate({
            scrollTop:0
        },600);

    });

    /* ハンバーガーメニュー */
    $('.nav_hm').on('click', function(e) {

        e.stopPropagation();

        $(".btn-trigger").toggleClass('active');
        $(".menu-panel").toggleClass("active");

    });

    /* 背景クリックで閉じる */

    $(document).on('click', function(e){

        if(!$(e.target).closest('.menu-panel, .nav_hm').length){

            $(".menu-panel").removeClass("active");
            $(".btn-trigger").removeClass("active");

        }

    });

});