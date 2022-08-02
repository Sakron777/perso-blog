$("#portfolio").slick({
    arrows: true,
    dots: true,
    speed: 800,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive:[
        {

           breakpoint: 990,
           settings:{
               slidesToShow: 1
           }
        },
    ]
});

