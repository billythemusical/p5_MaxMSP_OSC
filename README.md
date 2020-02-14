# p5_MaxMSP_OSC
A short example for sending and receiving OSC in p5 and MaxMSP.

We must do a few things to get p5 and Max talking over OSC.   

First, we have to understand that a socket.io connection must be made between the two.  

This is accomplished by using the node.js object in Max to run the bridge.js script file which will establish a socket.io connection with the browser window.  To do this, you simply click the <b>“start script”</b> message box in the Max patch.  If the script is running, you will see the “green light” in the Node status window beneath.

Second, we have to host the index.html and other files locally.  To do this, open Terminal and “cd” to the directory these files are in and do:  <b>python -m http.server 2000</b> ... You have to have some version of Python installed to do this.  Google around if you need to.  

Then in your browser, navigate to <b>localhost:2000/index.html</b> in our browser, and you should see the values coming into the browser from Max and the mouseX & Y position going out from the browser to Max.  

***Note: you must move the mouse with the p5 sketch window active to get the mouse data to change.***
