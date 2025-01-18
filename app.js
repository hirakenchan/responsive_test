$(function () {
    // ここに追記
    window.addEventListener('scroll', function () {
        const suggest_img = document.querySelectorAll('.suggest_img');
        const scroll = window.scrollY;
        const windowHeight = window.innerHeight;
        const header = this.document.querySelector('header');

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
    });

    // const modal = document.getElementById('modal');
    // const room_search = document.getElementById('room_search');
    // room_search.onclick = function() {
    //     modal.style.display = 'block';
    // }

    $('#room_search').on('click', function() {
        $('#modal').css('display', 'block');
    });
});

