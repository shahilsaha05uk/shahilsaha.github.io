var swiper = new Swiper('.mySwiper', {
    loop: true,
    autoHeight: true, // Enable auto height
    spaceBetween: 30,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    on: {
        slideChange: function () {
            // Pause all YouTube iframes when sliding to a new slide
            var iframes = document.querySelectorAll('.swiper-slide iframe');
            iframes.forEach(function (iframe) {
                // Using postMessage to send a command to the YouTube API
                iframe.contentWindow.postMessage(JSON.stringify({
                    event: 'command',
                    func: 'pauseVideo',
                    args: []
                }), '*');
            });
        },
        // Include other event handlers if necessary
    },
});
