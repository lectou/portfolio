

$(window).on("load", function () {

  window.setTimeout(function () {
    $(".load").removeClass("active");
  }, 700);


  $('.slider').slick({
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    prevArrow: "<img src='assets/images/nav_elements/left.png' class='prev'>",
    nextArrow: "<img src='assets/images/nav_elements/right.png' class='next'>",
    responsive: [
      {
        breakpoint: 670,
        settings: {
          prevArrow: null,
          nextArrow: null,
        }
      }
    ]
  });


  $('.sidebar-button').on("click", function () {
    openSidebar()
  })

  $('.sidebar__back').on('click', function () {
    closeSidebar()
  })

  function openSidebar() {
    $('.sidebar').addClass('active');
    let mask = $("<div></div>");
    mask.addClass('page__mask');
    mask.on('click', closeSidebar);
    $('#page').append(mask);
    $(document.body).addClass('show-info no-scroll');
  }

  function closeSidebar() {
    $('.sidebar').removeClass('active');
    $(document.body).removeClass('show-info no-scroll');
    $('.page__mask').remove();
  }
})
