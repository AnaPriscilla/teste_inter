$(document).ready(function(){
    let currentImageIndex = 0;
    const images = $('.carousel-images img');
    const totalImages = images.length;
    const intervalTime = 10000; 

    function changeImage(index) {
        currentImageIndex = index; 
        const offset = -index * 100 + '%';
        $('.carousel-images').css('transform', `translateX(${offset})`);
        updateDots(); 
    }

    function updateDots() {
        $('.dot').removeClass('active');
        $('.dot').eq(currentImageIndex).addClass('active');
    }

    $('.next').click(function(){
        currentImageIndex = (currentImageIndex + 1) % totalImages;
        changeImage(currentImageIndex);
    });

    $('.prev').click(function(){
        currentImageIndex = (currentImageIndex - 1 + totalImages) % totalImages;
        changeImage(currentImageIndex);
    });

    $('.dot').click(function(){
        const index = $(this).data('index');
        changeImage(index);
    });

    updateDots();

    function autoRotate() {
        currentImageIndex = (currentImageIndex + 1) % totalImages;
        changeImage(currentImageIndex);
    }

    let autoRotateInterval = setInterval(autoRotate, intervalTime);

    function resetInterval() {
        clearInterval(autoRotateInterval);
        autoRotateInterval = setInterval(autoRotate, intervalTime);
    }

    $('.next, .prev, .dot').click(function(){
        resetInterval();
    });
});
