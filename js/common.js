$(document).ready(function () {
  $('.reviews-slider').slick({
	  infinite: true,
	  slidesToShow: 4,
	  slidesToScroll: 1,
	  dots: true,
   });
  $('.questions-block').on('click', function() {
  	$('.questions-block').removeClass('questions-block-active');
  	$(this).addClass('questions-block-active')
  })

  $('.btn-modal').on('click', function() {
  	$('.modal-dark').addClass('modal-dark-active');
  	$('.modal-form').addClass('modal-form-active');
  	return false;
  })
  $('.modal-dark, .modal-form__close').on('click', function() {
  	$('.modal-dark').removeClass('modal-dark-active');
  	$('.modal-form').removeClass('modal-form-active');
  	return false;
  })


  $(".phone").inputmask("+375-99-99-99-99");
})