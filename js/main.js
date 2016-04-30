
var addAdsBanner = function(url, targetElement){
	var img = $('<img alt="ads"/>').attr('src', url)
	.on('load', function() {
		if (this.complete && this.naturalWidth > 0) {
			img.width(this.naturalWidth);
			debugger;
			$(targetElement).append(img);	
		}
	});
}

var addAdsBannerAjax = function(adsUrl, targetElement){
	$.ajax({ 
		url : adsUrl,
		processData : false,
	}).complete(function(){
		var img = $('<img alt="ads"/>').attr('src', adsUrl);
		$(targetElement).append(img);
	});
}

var onMediaChange = function (mediaQueryList) {
	if (mediaQueryList.matches) {
        //check if ads block empty
        if($('#block-ads').children().length===0){
        	// addAdsBannerAjax('http://www.hitta.se/public/images/advertice-form/annonswebb-logolistning.jpg', '#block-ads');
        	// addAdsBannerAjax('http://www.hitta.se/public/images/advertice-form/annonswebb-topplacering.jpg', '#block-ads');

        	//Non-AJAX alternative
        	addAdsBanner('img/banner-1.gif', '#block-ads');
        	addAdsBanner('img/banner-2.gif', '#block-ads');

        }
    }
}

var mql = window.matchMedia("(min-width: 992px)");
mql.addListener(onMediaChange);
onMediaChange(mql);

