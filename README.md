# p5_MaxMSP_OSC
A short example for sending and receiving OSC in p5 and MaxMSP.

We must do a few things to get p5 and Max talking over OSC.  First, you need to have Node installed either globally for all users on your machine or locally in the folder in which we are working.  In the case of the latter, you will see a <b>node_modules</b> folder added to the contents of this folder.  Google around about installing Node for more info.  

Second, we use the node.js object in the Max patch to run the bridge.js script file which will establish a socket.io connection with the p5 sketch in the browser window.  To do this, you simply click the <b>“start script”</b> message box in the Max patch.  If the script is running (and you have Node properly installed), you will see the “green light” in the Node status window beneath.

Thirdly, we have to host the index.html and other files locally.  If you have Python installed you can do this easily.  Just open Terminal and “cd” to the directory where these files are.  Then do: <b>python -m http.server 2000</b>   

Now you can open your browser and navigate to <b>localhost:2000/index.html</b>.  Here you should see values coming in to the browser from Max and the mouse x and y positions going out from the browser to Max.  

***Note: you must move the mouse with the p5 sketch window active to get the mouse data to change.***
