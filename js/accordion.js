
    $('.accordion1 .header').hover(function () {
        let accHeader = $(this);
        accHeader.children().each(function () {
            if ($(this).hasClass("sign")) {
                $(this).text("-");
            }
        });
    }, function () {
        let accHeader = $(this);
        accHeader.children().each(function () {
            if (!$(this).parent().hasClass("active-header1") && $(this).hasClass("sign")) {
                $(this).text("+");
            }
        });
    });

    $('.accordion2 .header').hover(function () {
        let accHeader = $(this);
        accHeader.children().each(function () {
            if ($(this).hasClass("sign")) {
                $(this).text("-");
            }
        });
    }, function () {
        let accHeader = $(this);
        accHeader.children().each(function () {
            if (!$(this).parent().hasClass("active-header1") && $(this).hasClass("sign")) {
                $(this).text("+");
            }
        });
    });

    $('.accordion3 .header').hover(function () {
        let accHeader = $(this);
        accHeader.children().each(function () {
            if ($(this).hasClass("sign")) {
                $(this).text("-");
            }
        });
    }, function () {
        let accHeader = $(this);
        accHeader.children().each(function () {
            if (!$(this).parent().hasClass("active-header2") && $(this).hasClass("sign")) {
                $(this).text("+");
            }
        });
    });

    $('.accordion4 .header').hover(function () {
        let accHeader = $(this);
        accHeader.children().each(function () {
            if ($(this).hasClass("sign")) {
                $(this).text("-");
            }
        });
    }, function () {
        let accHeader = $(this);
        accHeader.children().each(function () {
            if (!$(this).parent().hasClass("active-header2") && $(this).hasClass("sign")) {
                $(this).text("+");
            }
        });
    });

    $('.accordion1 .header').click(function () {
        let headClicked1 = $(this);
        $('.accordion1 .header').each(function () {
            if ($(this).not(headClicked1).hasClass("active-header1")) {
                $(this).removeClass("active-header1");
            }
        });
        $('.accordion1 .content').not($(this).next()).slideUp();
        $(this).toggleClass("active-header1");
        $(this).next().slideToggle();
        $('.accordion1 .header').children().each(function () {
            if (!$(this).parent().hasClass("active-header1") && $(this).hasClass("sign")) {
                $(this).text("+");
            }
            else if ($(this).hasClass("sign")) {
                $(this).text("-");
            }
        });
    });

    $('.accordion2 .header').click(function () {
        let headClicked2 = $(this);
        $('.accordion2 .header').each(function () {
            if ($(this).not(headClicked2).hasClass("active-header1")) {
                $(this).removeClass("active-header1");
            }
        });
        $('.accordion2 .content').not($(this).next()).slideUp();
        $(this).toggleClass("active-header1");
        $(this).next().slideToggle();
        $('.accordion2 .header').children().each(function () {
            if (!$(this).parent().hasClass("active-header1") && $(this).hasClass("sign")) {
                $(this).text("+");
            }
            else if ($(this).hasClass("sign")) {
                $(this).text("-");
            }
        });
    });

    $('.accordion3 .header').click(function () {
        let headClicked3 = $(this);
        $('.accordion3 .header').each(function () {
            if ($(this).not(headClicked3).hasClass("active-header2")) {
                $(this).removeClass("active-header2");
            }
        });
        $('.accordion3 .content').not($(this).next()).slideUp();
        $(this).toggleClass("active-header2");
        $(this).next().slideToggle();
        $('.accordion3 .header').children().each(function () {
            if (!$(this).parent().hasClass("active-header2") && $(this).hasClass("sign")) {
                $(this).text("+");
            }
            else if ($(this).hasClass("sign")) {
                $(this).text("-");
            }
        });
    });

    $('.accordion4 .header').click(function () {
        let headClicked4 = $(this);
        $('.accordion4 .header').each(function () {
            if ($(this).not(headClicked4).hasClass("active-header2")) {
                $(this).removeClass("active-header2");
            }
        });
        $('.accordion4 .content').not($(this).next()).slideUp();
        $(this).toggleClass("active-header2");
        $(this).next().slideToggle();
        $('.accordion4 .header').children().each(function () {
            if (!$(this).parent().hasClass("active-header2") && $(this).hasClass("sign")) {
                $(this).text("+");
            }
            else if ($(this).hasClass("sign")) {
                $(this).text("-");
            }
        });
    });
