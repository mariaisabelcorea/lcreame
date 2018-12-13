// Initialize your app
var myApp = new Framework7({
	root:'#app',
	theme: 'md', //ios, md, auto
    modalTitle: 'Framework7', 	//title for modals
	panel: {
    	swipe: 'left',
  	},
	cache:false,
	pushState:false,
	swipeBackPage:true,
	material: true,
	routes: [
		{
		path: '/home/',
    	url: 'index.html',
    	name: 'home',
  		},
		{
		path: '/info-cakes/',
    	url: 'info-cakes.html',
    	name: 'info-cakes',
  		},
		{
		path: '/cookies/',
    	url: 'cookies.html',
    	name: 'cookies',
  		},
		{
		path: '/info-cookies/',
    	url: 'info-cookies.html',
    	name: 'info-cookies',
  		},
		
		
	]
});

// Export selectors engine
var $$ = Dom7;





 

