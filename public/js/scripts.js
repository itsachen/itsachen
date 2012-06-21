animatedcollapse.addDiv('emorecord', 'fade=1,height=90px')
animatedcollapse.addDiv('stegafy', 'fade=1,height=55px')
animatedcollapse.addDiv('notetag', 'fade=1,height=180px')
animatedcollapse.addDiv('tourist', 'fade=1,height=55px')

animatedcollapse.ontoggle=function($, divobj, state){ //fires each time a DIV is expanded/contracted
	//$: Access to jQuery
	//divobj: DOM reference to DIV being expanded/ collapsed. Use "divobj.id" to get its ID
	//state: "block" or "none", depending on state
}
animatedcollapse.init()