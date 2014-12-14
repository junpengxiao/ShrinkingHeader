#WARNING:
I'm not sure if this tiny project have any copyright issue. Please see LICENSE for more details.
#Motivation
I'm currently building my own blog via golang & GAE. It's called [GoSpell](https://github.com/tonyshaw/GoSpell). During the time developing the frontend, I need a shrinking header which an be viewed at any point the scroll stops.
However, all JS I found only have 2 states: the larger one in the begining, and the smaller one triggered by a certain scrolling position.
#How To Use:
There are 2 files: a css file & a js file. All features requires HTML5 & CSS3.

- Add onwheel hander in `<body>`

```<body onwheel = "ResizeNavbar()">```

- Add a div and use "navbar" class

```<div class = "navbar">```

- Using `<ul>` & `<li>` to arrange your items. In order to control the item position, you need to specify them in to either "nav-item-left" or "nav-item-right" class.

- If you have brand icon and brand name to display, please add id respectively.

```<img src="a.png" id="brand_icon"></image>
<a id="brand_text">some text</a>```

#DEMO
Please download and see sample.html