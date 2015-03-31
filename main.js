$(function(){

	/**
	 * 検索メニューの開閉
	 */
	$('#open-menuBtn').on(
		'click',
		function(){

			if($(this).hasClass('selected')) {

				$(this).removeClass('selected');
				$('#menu-A').slideDown('fast');
				$('#menu-B').slideUp('fast');

			} else {

				$(this).addClass('selected');
				$('#menu-A').slideUp('fast');
				$('#menu-B').slideDown('fast');
			}
		});

	/**
	 * スクロール制御ボタンの動作
	 */
	var scrolling ;
	$('li[ id ^= "scroll-" ]')
	.mousedown(function() {

		// スクロールの開始
		var status = this.id.replace(/scroll-/, '');

		var diff = 0;
		switch(status) {

			case 'up':
				diff = -1;
				break;

			case 'down':
				diff = 1;
				break;
		}

		scrolling = setInterval(function() {
			var current_scr_top = $(window).scrollTop();
			$(window).scrollTop(current_scr_top + diff);
		}, 10);
	})
	.mouseup(function() {

		//　スクロールの停止
		clearInterval(scrolling);

	});
	$('html').mouseup(function() {

		//　スクロールの停止
		clearInterval(scrolling);
	});
});