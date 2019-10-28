# Video Doorbell, Lab 7

*A lab report by John Q. Student*

### In This Report

1. Upload a video of your version of the camera lab to your lab Github repository
1. As usual, update your class Hub repository to add your [forked IDD-Fa18-Lab7](/FAR-Lab/IDD-Fa18-Lab7) repository.
1. Answer the questions in-line below on your README.md.

## Part A. HelloYou from the Raspberry Pi

**a. Link to a video of your HelloYou sketch running.**
[helloYou](https://www.youtube.com/watch?v=IppbJH_Osh4&feature=youtu.be)

## Part B. Web Camera

**a. Compare `helloYou/server.js` and `IDD-Fa18-Lab7/pictureServer.js`. What elements had to be added or changed to enable the web camera? (Hint: It might be good to know that there is a UNIX command called `diff` that compares files.)**

**b. Include a video of your working video doorbell**
i adjusted my client file to read

```' switch (msg) {
    case "light":
      document.body.style.backgroundColor = "white";
      console.log("white")
      takePicture();
      break;
  ```

[working doorbell](https://www.youtube.com/watch?v=cJG3QEjVHro&feature=youtu.be)


## Part C. Make it your own

**a. Find, install, and try out a node-based library and try to incorporate into your lab. Document your successes and failures (totally okay!) for your writeup. This will help others in class figure out cool new tools and capabilities.**

**b. Upload a video of your working modified project**

I was able to successfully install the gm node package. My goal was to get the crazytown function to work within my client.js file.

Per the GM documentation, I added 

```var fs = require('fs')
  , gm = require('gm');
  ```
 to the top of my file and added
 
 ```// crazytown
gm('/path/to/my/img.jpg')
.flip()
.magnify()
.rotate('green', 45)
.blur(7, 3)
.crop(300, 300, 150, 130)
.edge(3)
.write('/path/to/crazy.jpg', function (err) {
  if (!err) console.log('crazytown has arrived');
})
```

with the appropriate file path `/home/pi/IDD-Fa19-Lab7/public`.

Unfortunately, when I added this, I lost the ability to take pictures and wasn't able to fix it. 
