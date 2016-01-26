(function($) {
    var self = $.shushu = new function(){};
    $.extend(self, {
        karelImgs: [
			"http://i.imgur.com/mDm3CcB.png",
			"http://i.imgur.com/8h421Ab.png",
			"http://i.imgur.com/0AY6Om3.png",
			"http://i.imgur.com/JB4Kklg.gif",
			"http://i.imgur.com/2peqVOQ.png",
			"http://i.imgur.com/mhcP6Lr.gif",
			"http://i.imgur.com/scFg0Wo.png",
			"http://i.imgur.com/USAAkSu.png",
			"http://i.imgur.com/c3felci.png",
			"http://i.imgur.com/7BvgSHn.gif",
			"http://i.imgur.com/kTjo6dp.gif"
			


        ],
        handleImages : function (lstImgs, time) {
            $.each($('img'), function(i,item) { 
                if($.inArray($(item).attr('src'), lstImgs) == -1) {
					var h = $(item).height();
					var w = $(item).width();
					if(h > 0 && w > 0) {
						$(item).css('width', w + 'px').css('height', h + 'px');
						$(item).attr('src', lstImgs[Math.floor(Math.random() * lstImgs.length)]); 
					}
					else {
						$(item).load(function(){
							if($.inArray($(item).attr('src'), lstImgs) == -1) {
								var h = $(item).height();
								var w = $(item).width();
								$(item).css('width', w + 'px').css('height', h + 'px');
								$(item).attr('src', lstImgs[Math.floor(Math.random() * lstImgs.length)]); 
							}
						});
					}
				}
            });
            if (time > 0) {
                setTimeout(function () { self.handleImages(lstImgs, time); }, time);
            }
        }
    });
    $(function(){
        self.handleImages(self.karelImgs, 3000);
    });
})(jQuery);