var elements, text, feedStream, filter = 'Navrhovaný příspěvek';

clearFeed();
setInterval(clearFeed, 300);

function clearFeed()
{
	try{ //try - because I don't want wait for DOM ready
		if(!feedStream){ //saving some performance with saving reference to feed which is persistent until page reaload
			feedStream = document.body.querySelector("[id^='feed_stream']");
		}
		elements = feedStream.querySelectorAll('span>span[class]');
	    for (var i = elements.length-1; i > 0; i--){
	        if(filter.localeCompare(elements[i].innerText)===0){ //fastest way to compare strings?
	            // uncomment for debug
	            // elements[i].closest("[data-testid^='fbfeed']").style.outline = "5px solid black";
	            // elements[i].closest("[data-testid^='fbfeed']").style.opacity = "0.1";
	            elements[i].closest("[data-testid^='fbfeed']").style.display = "none";
	        }
	    }  
	}catch(ignore){}
}