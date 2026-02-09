var _____WB$wombat$assign$function_____=function(name){return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name))||self[name];};if(!self.__WB_pmw){self.__WB_pmw=function(obj){this.__WB_source=obj;return this;}}{
let window = _____WB$wombat$assign$function_____("window");
let self = _____WB$wombat$assign$function_____("self");
let document = _____WB$wombat$assign$function_____("document");
let location = _____WB$wombat$assign$function_____("location");
let top = _____WB$wombat$assign$function_____("top");
let parent = _____WB$wombat$assign$function_____("parent");
let frames = _____WB$wombat$assign$function_____("frames");
let opens = _____WB$wombat$assign$function_____("opens");
/*----------------------------------
    //------ ADVANCED SEARCH ------//
    -----------------------------------*/
    $('.more-search-options-trigger').on('click', function (e) {
        e.preventDefault();
        $('.more-search-options, .more-search-options-trigger').toggleClass('active');
        $('.more-search-options.relative').animate({
            height: 'toggle',
            opacity: 'toggle'
        }, 300);
    });

/*----------------------------------------------------*/
/*  Range Sliders
/*----------------------------------------------------*/

// Area Range
$("#area-range").each(function () {

    var dataMin = $(this).attr('data-min');
    var dataMax = $(this).attr('data-max');
    var dataUnit = $(this).attr('data-unit');

    $(this).append("<input type='text' class='first-slider-value'disabled/><input type='text' class='second-slider-value' disabled/>");

    $(this).slider({

        range: true,
        min: dataMin,
        max: dataMax,
        step: 10,
        values: [dataMin, dataMax],

        slide: function (event, ui) {
            event = event;
            $(this).children(".first-slider-value").val(ui.values[0] + " " + dataUnit);
            $(this).children(".second-slider-value").val(ui.values[1] + " " + dataUnit);
        }
    });
    $(this).children(".first-slider-value").val($(this).slider("values", 0) + " " + dataUnit);
    $(this).children(".second-slider-value").val($(this).slider("values", 1) + " " + dataUnit);

});


// Price Range
$("#price-range").each(function () {

    var dataMin = $(this).attr('data-min');
    var dataMax = $(this).attr('data-max');
    var dataUnit = $(this).attr('data-unit');

    $(this).append("<input type='text' class='first-slider-value' disabled/><input type='text' class='second-slider-value' disabled/>");


    $(this).slider({

        range: true,
        min: dataMin,
        max: dataMax,
        values: [dataMin, dataMax],

        slide: function (event, ui) {
            event = event;
            $(this).children(".first-slider-value").val(dataUnit + ui.values[0].toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
            $(this).children(".second-slider-value").val(dataUnit + ui.values[1].toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        }
    });
    $(this).children(".first-slider-value").val(dataUnit + $(this).slider("values", 0).toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    $(this).children(".second-slider-value").val(dataUnit + $(this).slider("values", 1).toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));


});

/*----------------------------------------------------*/
/*  Range Sliders 2
/*----------------------------------------------------*/

// Area Range
$("#area-range-rent").each(function () {

    var dataMin = $(this).attr('data-min');
    var dataMax = $(this).attr('data-max');
    var dataUnit = $(this).attr('data-unit');

    $(this).append("<input type='text' class='first-slider-value'disabled/><input type='text' class='second-slider-value' disabled/>");

    $(this).slider({

        range: true,
        min: dataMin,
        max: dataMax,
        step: 10,
        values: [dataMin, dataMax],

        slide: function (event, ui) {
            event = event;
            $(this).children(".first-slider-value").val(ui.values[0] + " " + dataUnit);
            $(this).children(".second-slider-value").val(ui.values[1] + " " + dataUnit);
        }
    });
    $(this).children(".first-slider-value").val($(this).slider("values", 0) + " " + dataUnit);
    $(this).children(".second-slider-value").val($(this).slider("values", 1) + " " + dataUnit);

});


// Price Range
$("#price-range-rent").each(function () {

    var dataMin = $(this).attr('data-min');
    var dataMax = $(this).attr('data-max');
    var dataUnit = $(this).attr('data-unit');

    $(this).append("<input type='text' class='first-slider-value' disabled/><input type='text' class='second-slider-value' disabled/>");


    $(this).slider({

        range: true,
        min: dataMin,
        max: dataMax,
        values: [dataMin, dataMax],

        slide: function (event, ui) {
            event = event;
            $(this).children(".first-slider-value").val(dataUnit + ui.values[0].toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
            $(this).children(".second-slider-value").val(dataUnit + ui.values[1].toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        }
    });
    $(this).children(".first-slider-value").val(dataUnit + $(this).slider("values", 0).toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    $(this).children(".second-slider-value").val(dataUnit + $(this).slider("values", 1).toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));


});

}