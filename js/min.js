$(".who-1").on('click', function () {
    "use strict";
    $(".profil-left").css({
        display: "none"
    });
    $(".profile-left-1").fadeIn(1, function () {
        $(".profile-left-1").animate({
            right: -193

        }, -555550);
        $(".profile-left-1").animate({
            right: 0

        }, 550, function () {
            $(".profile-left-1").addClass("z-index");
            $(".profile-left-2").addClass("z-index-none");
            $(".profile-left-3").addClass("z-index-none");
            $(".profile-left-4").addClass("z-index-none");
            $(".profile-left-1").removeClass("z-index-none");
            $(".profile-left-2").removeClass("z-index");
            $(".profile-left-3").removeClass("z-index");
            $(".profile-left-4").removeClass("z-index");
        });
    });
    
});
$(".who-2").on('click', function () {
    "use strict";
    $(".profil-left ").css({
        display: "none"
    });
    $(".profile-left-2").animate({
        right: -193

    }, -555550);
    $(".profile-left-2").fadeIn(1, function () {
        $(".profile-left-2").animate({
            right: 0

        }, 550, function () {
            $(".profile-left-2").addClass("z-index");
            $(".profile-left-1").addClass("z-index-none");
            $(".profile-left-3").addClass("z-index-none");
            $(".profile-left-4").addClass("z-index-none");
            $(".profile-left-2").removeClass("z-index-none");
            $(".profile-left-1").removeClass("z-index");
            $(".profile-left-3").removeClass("z-index");
            $(".profile-left-4").removeClass("z-index");
        });
    });
});
$(".who-3").on('click', function () {
    "use strict";
    $(".profil-left ").css({
        display: "none"
    });
    $(".profile-left-3").animate({
        right: -193

    }, -555550);
    $(".profile-left-3").fadeIn(1, function () {
        $(".profile-left-3").animate({
            right: 0

        }, 550,  function () {
            $(".profile-left-3").addClass("z-index");
            $(".profile-left-1").addClass("z-index-none");
            $(".profile-left-2").addClass("z-index-none");
            $(".profile-left-4").addClass("z-index-none");
            $(".profile-left-3").removeClass("z-index-none");
            $(".profile-left-1").removeClass("z-index");
            $(".profile-left-2").removeClass("z-index");
            $(".profile-left-4").removeClass("z-index");
        });
    });
});
$(".who-4").on('click', function () {
    "use strict";
    $(".profil-left ").css({
        display: "none"
    });
    $(".profile-left-4").animate({
        right: -193

    }, -5000);
    $(".profile-left-4").fadeIn(1, function () {
        $(".profile-left-4").animate({
            right: 0

        }, 550,  function () {
            $(".profile-left-4").addClass("z-index");
            $(".profile-left-3").addClass("z-index-none");
            $(".profile-left-2").addClass("z-index-none");
            $(".profile-left-1").addClass("z-index-none");
            $(".profile-left-4").removeClass("z-index-none");
            $(".profile-left-3").removeClass("z-index");
            $(".profile-left-2").removeClass("z-index");
            $(".profile-left-1").removeClass("z-index");
        });
    });
});
$(".who a").on('click', function () {
    'use strict';
    $(".who a").removeClass("active");
    $(this).addClass("active");
    $("html, body").animate({ scrollTop: 700 });

});
$(".who-i-am lu li a").on('click', function () {
    'use strict';
    $(".who-i-am lu li a").removeClass("ac");
    $(this).addClass("ac");
});
$(".desgin").on('click', function () {
    'use strict';
    $(".desgin-up-1").fadeIn();
    $(".desgin-up-2").fadeOut();
    $(".desgin-up-3").fadeOut();
    $(this).addClass("ac");
});
$(".desgin-1").on('click', function () {
    'use strict';
    $(".desgin-up-3").fadeIn();
    $(".desgin-up-1").fadeOut();
    $(".desgin-up-2").fadeOut();
    $(this).addClass("ac");
});
$(".desgin-2").on('click', function () {
    'use strict';
    $(".desgin-up-2").fadeIn();
    $(".desgin-up-3").fadeOut();
    $(".desgin-up-1").fadeOut();
    $(this).addClass("ac");
});
$(".desgin-0").on('click', function () {
    'use strict';
    $(".desgin-up-2").fadeIn();
    $(".desgin-up-3").fadeIn();
    $(".desgin-up-1").fadeIn();
    $(this).addClass("ac");
});
$("x").on('click', function() {
})
function xs() {
    $(".form").removeClass("d-flex");
    console.log("l;k;lk")
}