$(document).ready(function() {
	var $cateproductsSlideConf = $('.category-products-slider');
	var items       = parseInt($cateproductsSlideConf.attr('data-items'));
	var speed     	= parseInt($cateproductsSlideConf.attr('data-speed'));
	var autoPlay    = parseInt($cateproductsSlideConf.attr('data-autoplay'));
	var time    	= parseInt($cateproductsSlideConf.attr('data-time'));
	var arrow       = parseInt($cateproductsSlideConf.attr('data-arrow'));
	var pagination  = parseInt($cateproductsSlideConf.attr('data-pagination'));
	var move        = parseInt($cateproductsSlideConf.attr('data-move'));
	var pausehover  = parseInt($cateproductsSlideConf.attr('data-pausehover'));
	var lg          = parseInt($cateproductsSlideConf.attr('data-lg'));
	var md          = parseInt($cateproductsSlideConf.attr('data-md'));
	var sm          = parseInt($cateproductsSlideConf.attr('data-sm'));
	var xs          = parseInt($cateproductsSlideConf.attr('data-xs'));
	var xxs         = parseInt($cateproductsSlideConf.attr('data-xxs'));
	
	if(autoPlay==1) {
		if(time){
			autoPlay = time;
		}else{
			autoPlay = '3000';
		}
	}else{
		autoPlay = false;
	}
	if(pausehover){pausehover = true}else{pausehover=false}
	if(move){move = false}else{move=true}
	if(arrow){arrow =true}else{arrow=false}
	if(pagination==1){pagination = true}else{pagination=false}

	var cateproductsSlider = $(".category-products-slider .productCategorySlider");
	cateproductsSlider.owlCarousel({
		autoplay : autoPlay ,
		smartSpeed: speed,
		autoplayHoverPause: pausehover,
		addClassActive: true,
		scrollPerPage: move,
		nav : arrow,
		dots : pagination,
		responsiveClass:true,
		lazyLoad:true,	
		responsive:{
			0:{
				items:xxs,
			},
			360:{
				items:xxs,
			},
			576:{ 
				items:sm,
			},
			768:{
				items:md,
			},
			992:{
				items:lg,
			},
			1200:{
				items:items,
			}
		}
	});
	checkClasses();
    cateproductsSlider.on('translated.owl.carousel', function(event) {
        checkClasses();
    });

    function checkClasses(){
        $('.category-products-slider .category_products').each(function(){
        	var total = $(this).find('.owl-stage .owl-item.active').length;
			$(this).find('.owl-item').removeClass('firstActiveItem');
			$(this).find('.owl-item').removeClass('lastActiveItem');
			$(this).find('.owl-item.active').each(function(index){
				if (index === 0) { $(this).addClass('firstActiveItem'); }
				if (index === total - 1 && total>1) {
					$(this).addClass('lastActiveItem');
				}
			}) 
        });
    }
	
});

