if (window.innerWidth >= 992) {
    new fullpage('#fullpage', {
        responsiveWidth: 992,

        recordHistory: false,

        // you can also use the HTML attribute data-tooltip on each section instead
        navigation: true,
        navigationTooltips: ['Hello', 'Slide 1', 'Slide 2', 'Take action'],

        // Navigation for horizontal slides
        slidesNavigation: true,
        slidesNavPosition: 'bottom', // Default

        controlArrows: true,
        controlArrowsHTML: [
            '<div class="my-arrow">&LeftAngleBracket;</div>',
            '<div class="my-arrow">&RightAngleBracket;</div>'
        ],

        anchors: ['','research','publications','contact'],

        licenseKey: 'gplv3-license'
    });
}