Fancybox.bind("[data-fancybox]", {
  Youtube: {
    controls: 0,
    rel: 0
  }
});

$(function () {
  var mixer = mixitup('.blog_grid');
  $('.blog_filter-btn').on('click', function () {
    $('.blog_filter-btn').removeClass('blog_filter-btn--active');
    $(this).addClass('blog_filter-btn--active');
  });
});

$('.reviews_slider').slick({
  arrows: false,
  dots: true,
  appendDots: $('.reviews_dots'),
  waitForAnimate: false,
  slidesToShow: 2,
})
$('.arrow-prev').on('click', function(e){
  e.preventDefault()
  $('.reviews_slider').slick('slickPrev')
})
$('.arrow-next').on('click', function(e){
  e.preventDefault()
  $('.reviews_slider').slick('slickNext')
})

$('.questions_acc-link').on('click', function(e) {
    e.preventDefault()
    if ($(this).hasClass('questions_acc-link--active')) {
      $(this).removeClass('questions_acc-link--active')
      $(this).children('.questions_acc-text').slideUp()
    }
    else {
      $('.questions_acc-link').removeClass('questions_acc-link--active')
      $('.questions_acc-text').slideUp() 
      $(this).addClass('questions_acc-link--active')
      $(this).children('.questions_acc-text').slideDown()
    }
})