$(document).ready(function () {
    $(".logo_centro_smot").mouseenter(function () {

        var img = $('.logo_centro_smot');

        $({rotation: 0}).animate({rotation: 1080}, {
            duration: 5000,
            easing: 'linear',
            step: function () {
                img.css({transform: 'rotate(' + this.rotation + 'deg)'});
                console.log(this.rotation);
            }
        });
    });

    $(".logo_centro_magna").mouseenter(function () {

        var img = $('.logo_centro_magna');

        $({rotation: 0}).animate({rotation: 1080}, {
            duration: 5000,
            easing: 'linear',
            step: function () {
                img.css({transform: 'rotate(' + this.rotation + 'deg)'});
                console.log(this.rotation);
            }
        });
    });
});
