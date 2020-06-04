// callback executed when canvas was found
function disablePopup(popup) { 
	document.body.style.overflow = 'visible';
	popup.style.display = "none";
}

// set up the mutation observer
var observer = new MutationObserver(function (mutations, me) {
  // `mutations` is an array of mutations that occurred
  // `me` is the MutationObserver instance
  
  var popup = document.getElementsByClassName('fc-ab-root')[0];
  if (popup) {
  	disablePopup(popup);
    me.disconnect(); // stop observing
    return;
}
});


// start observing
observer.observe(document, {
	childList: true,
	subtree: true
});