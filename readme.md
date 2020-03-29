<!-- Every README should start with an H1 -->
# The Good Project Readme Project
<!-- A one sentence description of the project or assignment -->
The Audio Diary is a website that allows people to express their feelings. The website converts the speech into visual representation with geometric shapes following the pastel color palette. [You can try it here.](https://yitingliu97-audio-diary.glitch.me/)

![Demo1](https://github.com/YitingLiu97/audio-diary/blob/master/assets/docs/demo1.jpg)

![Demo3](https://github.com/YitingLiu97/audio-diary/blob/master/assets/docs/demo3.jpg)


<!-- It is good practice to add an about or summary -->
## About

Welcome to the Audio Diary where you get to share your thoughts during hard times. Inspired by my favorite quote by Marcus Aurelius: "All is as thinking makes it so." It celebrates anonymity and does not save your thoughts.

I hope through this, you can start a conversation with yourself and look within. What is something that we can adjust ourselves to? What are some of your thoughts in their pure form? Maybe, this could be your personal sanctuary while exercising social distancing.


<!-- It is essential to describe how to set up your project -->
## Setup
Clone the repo. 

<!-- Any knowledge or tools you will need before hand -->
### Prerequisites

To make a good readme the following prerequisites are necessary:
1. A text editor - preferably [VS Code](https://code.visualstudio.com/)
2. An understanding of p5.js and p5.speech library. 


<!-- any installation needs should be defined -->
### Installation

For this particular project, there are no specific installation requirements. 

<!-- Write instructions on how to start working on your project -->
<!-- ### Develop

To develop this document, you can follow the steps provided below:
1. create a fork of this project on Github
2. ping the author of this repo via Github Issues to see if they are looking for contributions on the specific feature you're looking to add
3. open the file in VS Code and make updates 
4. add and commit those changes in your forked github repo
5. make a pull request specifying what additions and changes were made
6. have a nice chat and communication with me about those changes. 
7. celebrate the contribution!  -->

<!-- Notes about the deployment -->
### Deployment

This project is hosted on Github and deployed on Glitch. 

## Built with

* [VS Code](https://code.visualstudio.com/)
* [Github](https://github.com)
* [p5 web editor](https://editor.p5js.org/)

## Author

* [Yiting Liu](http://yitingliu97.wordpress.com/) -- NYU ITP 2020 -- [NYU ITP](https://itp.nyu.edu)

<!-- 
## Code of Conduct

Please read the [CODE OF CONDUCT](https://www.mozilla.org/en-US/about/governance/policies/participation/)  -->

## License

This project is registered under MIT license.

<!-- thank and reference all the things that made your project happen -->

<!-- For your assignments you might consider  -->
# Notes & Process
I built this website using p5.js and p5.speech.js. I first started with p5 web editor and then downloaded to my project. Later, I enhanced the aesthetics and added details in my html and css. 
<!-- How you built this project - Include images, gifs, and notes here -->
## Process & Documentation
I started with using typing rather than registering audio through p5 speech since I thought it would be easier to have the whole structure. I was wrong. 

It is quite different working with keys and audio texts. 
I did work with keyTyped and keyPressed functions, but when I wanted to try to type keys through input tag in the html, it didn't work. Only when I comment the keyTyped section, I can type text in the input box. 

![trying to add inputs](https://github.com/YitingLiu97/audio-diary/blob/master/assets/docs/trying%20to%20add%20input%20.png)

Therefore, I used p5 speech library to recognize the spoken words and convert them into texts. I split the speech content into words and found the end letter to each word to assign the color of the shapes.

![getting speech result in code and display](https://github.com/YitingLiu97/audio-diary/blob/master/assets/docs/speech%20testing.png)

I wanted to add more layers therefore, I edited background color which changes according to the number of letters in one sentence. I also added four fonts to display the sentence depending on the mouse position. I also played with different shapes as below.

![playing with different shapes. triangle shapes on a pink background with code](https://github.com/YitingLiu97/audio-diary/blob/master/assets/docs/trying%20different%20shapes%20location%20wise.png)

<!-- Any specific challenges or struggles documented -->
## Challenges & Struggles
Ideally, I would want each circle to have one color rather than a group of circle bearing the same color. I am still trying to figure out how to make it happen. 


<!-- Any questions you have -->
## Questions
1. How to make sure the mobile users can play with it?
2. How to make each circle generated to bear different colors rather than randomly assigned?

## Next Step
I am making other websites in the meantime to respond to hard times like the current pandemic of COVID-19. Hopefully, I will build a collection of these interactive websites together to alleviate the stress.




<!-- References for resources and inspiration -->
## References

*  [Marcus Aurelius](https://play.google.com/store/audiobooks/details?id=AQAAAEAsOCd4GM&gl=US&hl=en-US&source=productsearch&utm_source=HA&utm_medium=SEM&utm_campaign=PLA&pcampaignid=MKT-DR-na-us-1000189-Med-hasem-bk-Evergreen-Nov1417-PLA-audiobookspla*AQAAAEAsOCd4GM&gclid=Cj0KCQjw6_vzBRCIARIsAOs54z5ddm7O8Y1Y7QFgGqA8z1l9d7Gg25O5rKmgQ1na164fBQX0luTA0NcaArefEALw_wcB&gclsrc=aw.ds)
* [Ashwita Palekar](https://letssharefinalproject.herokuapp.com/)
