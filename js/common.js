$(document).ready(function () {
  $('.reviews-slider').slick({
	  infinite: true,
	  slidesToShow: 4,
	  slidesToScroll: 1,
	  dots: true,
   });
  $('.questions-block').on('click', function() {
  	$(this).toggleClass('questions-block-active');
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

  $('.nav-menu').on('click', function() {
  	$('.modal-menu').addClass('modal-menu-active');
  	return false;
  })
  $('.modal-menu__close').on('click', function() {
  	$('.modal-menu').removeClass('modal-menu-active');
  	return false;
  })

  $(".modal-menu-list li").on("click", 'a', function (event) {
    $('.modal-menu').removeClass('modal-menu-active');
    event.preventDefault();
    let id  = $(this).attr('href'),
    top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 1500);
  });

  jQuery(function($){
  	$(document).mouseup( function(e){ // событие клика по веб-документу
  		var div = $( "#modal-menu" ); // тут указываем ID элемента
  		if ( !div.is(e.target) // если клик был не по нашему блоку
  		    && div.has(e.target).length === 0 ) { // и не по его дочерним элементам
  			$('.modal-menu').removeClass('modal-menu-active');
  		}
  	});
  });

  $(".phone").inputmask("+375-(99)-999-99-99");
})