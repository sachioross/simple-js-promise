# Extremely simple example to working with promises

I was, and probably still am, having difficulty understanding how to really code for promises. A lot of this was due to the fact that many systems short-cut the process, which is great when you understand what's going on, but difficult for the n00bs such as myself. 

With the help of this wonderful article by Jack Franklin: [Embracing Promises in Javascript] (http://javascriptplayground.com/blog/2015/02/promises/), I finally had my epiphany moment that helped me understand what the heck was going on. To make sure I understood things, I put together this really, really simplistic example and posting this in the hopes that it helps the next guy understand it a little faster. 

This example has three ways to be run: 

- node simple.js
	- Runs the entire process with no errors
- node simple.js false
	- This will cause step 2 to call the reject method
- node simple.js true "Any strings that does not contain the word 'good'"
	- Example: node simple.js true "What spoon?"
	- This will cause Step 3 to call a reject method

I'd like to point out that Jack Franklin highly suggests reading the article by Jake Archibald: [JavaScript Promises] (http://www.html5rocks.com/en/tutorials/es6/promises/). I can't explain why, but when I first took a look at that article (before finding Jack's), it just seemed to overwhelm a bit. Reading it now I don't really understand why things didn't click then, but it really is a good read. 

This is meant to be just about as basic as you can get. If you have suggestions for simple to understand Promises examples (or want to add a couple), please feel free to reach out and/or open a pull request. 