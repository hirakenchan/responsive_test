$(function () {
    // ここに追記
    window.addEventListener('scroll', function () {
        const suggest_img = document.querySelectorAll('.suggest_img');
        const return_btn = document.querySelectorAll('.return_btn');
        const scroll = window.scrollY;
        const windowHeight = window.innerHeight;
        const header = document.querySelector('header');

        if (scroll <= 0) {
            header.classList.remove("scroll");
        } else {
            header.classList.add("scroll");
        }

        suggest_img.forEach(function (img) {
            const distanceToImg = img.offsetTop;
            if (scroll + windowHeight - 300 > distanceToImg) {
                img.classList.add('is-active');
            }
            else {
                img.classList.remove('is-active');
            }
        });

        // return_btn.forEach(function (btn) {
        //     const distanceToBtn = btn.offsetTop;
        //     if (scroll + windowHeight - 1000 > distanceToBtn) {
        //         btn.classList.add('btn_show');
        //     }
        //     else {
        //         btn.classList.remove('btn_show');
        //     }
        // });
    });

    const modal = $('.modal');
    const BG = $('.modal_BG')

    $('.room_search').on('click', function () {
        modal.fadeIn();
        BG.fadeIn();
    });

    BG.on('click', function () {
        modal.fadeOut();
        BG.fadeOut();
    });

    $(window).on('scroll', function() {
        const scrollTop = $(window).scrollTop();
        const windowHeight = $(window).height();
        $('.experience_container').each(function() {
            const containerHeight = $(this).offset().top;
            if(scrollTop + windowHeight > containerHeight) {
                $('.return_btn').fadeIn();
            }
            else {
                $('.return_btn').fadeOut();
            }
        })
    });

    $('.return_btn').on('click' , function() {
        window.scroll({top: 0, behavior: 'smooth'});
    });

});

