$(function(){
	// 导航隐藏
	$('.xiala').hover(
		function(){
			$(this).find('.menubd').show();
		},
		function(){
			$(this).find('.menubd').hide()
		}
	);

	$('#yt').animate({
		left:'+20px',
	},500);
	// 菜单隐藏
	$('.j').each(function(i){
		$(this).data('index',i);
	});
	$('.j').hover(function(){
		$('.hide').stop();
		$(this).find('.category-sub-pannel').show(0,function(){
			$(this).animate({left:190},200);
		});
		var i=$(this).data('index');
		$('.zhong').hide();
		$($('.zhong')[i]).show();
		$('.you').hide();
		$($('.you')[i]).show();
	},function(){
		$('.hide').stop();
		$(this).find('.category-sub-pannel').animate({left:212},20,function(){
			$(this).hide(0);
		})
	});

// 	// 右侧边
	$('.mini-bar').hover(
		function(){
			$('.mini-bar').stop();
			$(this).find('.mini-bar-tip').show(0,function(){
				$(this).animate({right:35},200);
			});
		},
		function(){
			$('.mini-bar').stop();
			$(this).find('.mini-bar-tip').css({right:60}).hide(0);
		});
	// 图片鼠标经过
	$('.pic').hover(
		function(){
		$(this).css({position:'relative'});
		$(this).stop();
		$(this).animate({left:-3},200);
		},
		function(){
			$(this).stop();
			$(this).animate({left:0},200);
		})

	$('.mini-shop').hover(function(){
		$('.mini-bar-img').addClass('img2')
	},
	function(){
		$('.mini-bar-img').removeClass('img2')
	});
	// 头部导航
	var ti;
	$(window).scroll(function(){
		if($(window).scrollTop()>600){
			clearTimeout(ti);
			ti=setTimeout(function(){
				$('#daohang').show();
			},500);
		}else{
			clearTimeout(ti);
			$('#daohang').hide();
		}
	});

	// 回到顶部
	$(window).scroll(function(){
		if($(window).scrollTop()>3000){
			$('.mini-top').show();
		}else{
			$('.mini-top').hide();
		}
	});
	$('.mini-top').click(function(){
		$({top:$(window).scrollTop()}).animate(
			{top:0},
			{
				duration:500,
				step:function(){
					$(window).scrollTop(this.top)
				}
			}
		)
	});


	// 品牌
	$('.card-item').each(function(i){	
	    $(this).data('index',i)
	 });
	$('.card-item').click(function(){
	    $('.card-item').removeClass('selected');
	    $(this).addClass('selected');
	    var i = $(this).data('index');
	    $('.pinpai').hide();
	    $( $('.pinpai')[i] ).show();
	    index = i;
	});

	// 楼梯
	$(window).scroll(function(){
		if($(window).scrollTop()>800){
			$('.floors').show();
		}else{
			$('.floors').hide();
		}
	})

	$('.fl').each(function(i){
		$(this).data('index',i);
	});
	$('.fl').click(function(){
		var i=$(this).data('index');
		var newtop=$($('.floor-item')[i]).offset().top-50;
		$({top:$(window).scrollTop()}).animate(
			{top:newtop},
			{
				duration:700,
				step:function(){
					$(window).scrollTop(this.top);
				}
			}
		)
	});
		// 楼梯自动变红
	$('.fl').each(function(i){
		$(this).data('index',i)
	});
	$('.fl').hover(function(){
		var i=$(this).data('index');
		$('.flback').hide();
		$($('.flback')[i]).show();
	},function(){
		$('.flback').hide();
	})

	setInterval(function(){
		for(var j=0; j<$('.fl').length; j++){
			var wind=$(window).scrollTop();
			var floor=$($('.floor-item')[j]).offset().top;
			if($($('.floor-item')[0]).offset().top<=wind  && $($('.floor-item')[0]).offset().top>=wind){
				$('.flback').hide();
				$($('.fl')[0]).show();
				return;
			}
			if(wind>floor && wind<=$($('.floor-item')[j+1]).offset().top){
				$('.flback').hide();
				$($('.flback')[j]).show();
			}
			if($($('.floor-item')[0]).offset().top>wind){
				$('.flback').hide('.flback');
			}
		}
	},10)


	// 大轮播
	 var index = 0;
	 var lunbo  =  function(){
	    $('.lunbo-item').hide();
	    var el = $('.lunbo-item')[index];
	    $(el).show();
	   
	  	$('.lunbo-item').each(function(i){
			$(this).data('index',i);
		});
	    $('.category-menu-content').css({
	    	background:function(i){
	    		var i=$(this).data('index');
	    		var arr=['#FFC3D3','#F14279','#1A2A43','#FFA800','#F6F5F3'];
	    		return arr[index];
	    	}
	    })
		 var arr=[
		    '#F7F5F6',
		    '#B0B0B0',
		    '#FEBEE0',
		    '#F13B78',
		    '#0F81E4',
		    '#FFA800',
		    '#9C8068',
		    '#FA3309',
		    '#239EDA',
		    '#FEC5D4',
		    '#FFC3D3',
		    '#29A6FF',
		    '#E4E2E3',
		    '#1766DF',
		    '#30C4FF',
		    '#D99485'
	    ]
		$('.kkk').hover(function(){
			clearInterval(timerId);
			$('.j').each(function(i){
				$(this).data('index',i);
			});
		    $('.category-menu-content').css({
		    	background:arr[$(this).data('index')]
		    })
		})

		// $('.menu-nav .menu-nav-market').hover(function(){
		// 	clearInterval(timerId);
		// 	timerId = setInterval(lunbo,1000);
		// }

	    $('.zhishi-item').removeClass('hov');
	    $($('.zhishi-item')[index]).addClass('hov');

	    index += 1;
	    if( index === $('.lunbo-item').length ){
	      index = 0;
	    }
	  }
	  $('.zhishi-item').each(function(i){	
	    $(this).data('index',i)
	  });

	  $('.zhishi-item').hover(function(){
	    clearInterval(timerId);
	    $('.zhishi-item').removeClass('hov');
	    $(this).addClass('hov');
	    var i = $(this).data('index');
	    $('.lunbo-item').hide();
	    $( $('.lunbo-item')[i] ).show();
	    index = i;


	    $('.zhishi-item').each(function(i){
			$(this).data('index',i);
		});
	    $('.category-menu-content').css({
	    	background:function(i){
	    		var i=$(this).data('index');
	    		var arr=['#FFC3D3','#F14279','#1A2A43','#FFA800','#F6F5F3'];
	    		return arr[index];
	    	}
	    })
	  },function(){
	    clearInterval(timerId);
	    timerId = setInterval(lunbo,1000);
	  });
	  var timerId = setInterval(lunbo,1000);



	// 1楼
	var xi0=0;
	var yilou=function(){
		$('.yilou').hide();
		var els=$('.yilou')[xi0];
		$(els).show();
		xi0+=1;
		if(xi0 === $('.yilou').length){
			xi0=0;
		}
	}
	setInterval(yilou,1000);
	var current1=$('.yilou')[0]
	$('.pre1').click(function(){
		$(current1).show();
		var pre1=(current1.previousElementSibling) ? current1.previousElementSibling:$('.yilou')[2];
		$(current1).hide();
		$(pre1).show();
		current1=pre1;
	})
	$('.next1').click(function(){
		$(current1).show();
		var next1=(current1.nextElementSibling)?current1.nextElementSibling:$('.yilou')[0];
		$(current1).hide();
		$(next1).show();
		current1=next1;
	})

	// 2楼
	var xi1=0;
	var erlou=function(){
		$('.erlou').hide();
		var er=$('.erlou')[xi1];
		$(er).show();
		xi1+=1;
		if(xi1 === $('.erlou').length){
			xi1=0;
		}
	}
	setInterval(erlou,1000);
	var current2=$('.erlou')[0]
	$('.pre2').click(function(){
		$(current2).show();
		var pre2=(current2.previousElementSibling) ? current2.previousElementSibling:$('.erlou')[2];
		$(current2).hide();
		$(pre2).show();
		current2=pre2;
	})
	$('.next2').click(function(){
		$(current2).show();
		var next2=(current2.nextElementSibling)?current2.nextElementSibling:$('.erlou')[0];
		$(current2).hide();
		$(next2).show();
		current2=next2;
	})

	// 3楼
	var xi2=0;
	var sanlou=function(){
		$('.sanlou').hide();
		var san=$('.sanlou')[xi2];
		$(san).show();
		xi2+=1;
		if(xi2 === $('.sanlou').length){
			xi2=0;
		}
	}
	setInterval(sanlou,1000);
	var current3=$('.erlou')[0]
	$('.pre3').click(function(){
		$(current3).show();
		var pre3=(current3.previousElementSibling) ? current3.previousElementSibling:$('.sanlou')[2];
		$(current3).hide();
		$(pre3).show();
		current3=pre3;
	})
	$('.next3').click(function(){
		$(current3).show();
		var next3=(current3.nextElementSibling)?current3.nextElementSibling:$('.sanlou')[0];
		$(current3).hide();
		$(next3).show();
		current3=next3;
	})

	// 4楼
	var xi4=0;
	var silou=function(){
		$('.silou').hide();
		var si=$('.silou')[xi4];
		$(si).show();
		xi4+=1;
		if(xi4 === $('.silou').length){
			xi4=0;
		}
	}
	setInterval(silou,1000);
	var current4=$('.erlou')[0]
	$('.pre4').click(function(){
		$(current4).show();
		var pre4=(current4.previousElementSibling) ? current4.previousElementSibling:$('.silou')[2];
		$(current4).hide();
		$(pre4).show();
		current4=pre4;
	})
	$('.next4').click(function(){
		$(current4).show();
		var next4=(current4.nextElementSibling)?current4.nextElementSibling:$('.silou')[0];
		$(current4).hide();
		$(next4).show();
		current4=next4;
	})

	// 5楼
	var xi5=0;
	var wulou=function(){
		$('.wulou').hide();
		var wu=$('.wulou')[xi5];
		$(wu).show();
		xi5+=1;
		if(xi5 === $('.wulou').length){
			xi5=0;
		}
	}
	setInterval(wulou,1000);
	var current5=$('.erlou')[0]
	$('.pre5').click(function(){
		$(current5).show();
		var pre5=(current5.previousElementSibling) ? current5.previousElementSibling:$('.wulou')[2];
		$(current5).hide();
		$(pre5).show();
		current5=pre5;
	})
	$('.next5').click(function(){
		$(current5).show();
		var next5=(current5.nextElementSibling)?current5.nextElementSibling:$('.wulou')[0];
		$(current5).hide();
		$(next5).show();
		current5=next5;
	})

	// 8楼
	var xi8=0;
	var balou=function(){
		$('.balou').hide();
		var ba=$('.balou')[xi8];
		$(ba).show();
		xi8+=1;
		if(xi8 === $('.balou').length){
			xi8=0;
		}
	}
	setInterval(balou,1000);
	var current8=$('.erlou')[0]
	$('.pre8').click(function(){
		$(current8).show();
		var pre8=(current8.previousElementSibling) ? current8.previousElementSibling:$('.balou')[2];
		$(current8).hide();
		$(pre8).show();
		current8=pre8;
	})
	$('.next8').click(function(){
		$(current8).show();
		var next8=(current8.nextElementSibling)?current8.nextElementSibling:$('.balou')[0];
		$(current8).hide();
		$(next8).show();
		current8=next8;
	})



})



