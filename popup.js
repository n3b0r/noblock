// callback executed when canvas was found
function disablePopup(popup) { 
	document.body.style.overflow = 'visible';
	popup.style.setProperty('display', 'none', 'important');
}

// set up the mutation observer
var observer = new MutationObserver(function (mutations, me) {
  // `mutations` is an array of mutations that occurred
  // `me` is the MutationObserver instance
  
  var popup = document.getElementsByClassName('fc-ab-root')[0];
  var popup2 = document.getElementById('abPopup');
  if (popup || popup2) {
  	disablePopup(popup ?? popup2);
    me.disconnect(); // stop observing
    return;
}
});


// start observing
observer.observe(document, {
	childList: true,
	subtree: true
});