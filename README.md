![jcSlide preview](http://joanclaret.github.io/jcSlider/img/github-cover.png)


A responsive slider jQuery plugin with CSS animations
========================================
Animations from [animate.css](https://daneden.github.io/animate.css/)

[![npm version](https://badge.fury.io/js/jcslider.svg)](https://badge.fury.io/js/jcslider)


Online demo
-----------

[Visit plugin website](http://joanclaret.github.io/jcSlider).

[Appszoom for developers](http://www.appszoom.com/developers) also uses it! Great!


What's the difference with other sliders?
-----------

This plugin does not use jQuery animations. Only CSS3, because [performance matters](http://perf.rocks/).
No need to calculate distances, sizes or whatever, only add and remove classes to elements to animate them. It couldn't be easier!

* Only 1 js file
* 1Kb minified
* Responsive
* Multiple effects (more than 60!)
* Works with html, images... whatever you want to animate


Installation
-----------

### 1. Grab a copy of the plugin

Using bower

```bash
bower install jcslider --save 
```

Using npm

```bash
npm install jcslider --save 
```

or [download the plugin](https://github.com/JoanClaret/jcSlider/archive/master.zip) from GitHub


### 2. Load the required javascript files


Load them in the html

```html
<!-- jQuery library (served from Google) -->
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js"></script>

<!-- jcSlider Javascript file -->
<script src="jquery.jcslider.min.js"></script>
```

or use Browserify

```javascript
require('jcSlider');
```

### 3. Load the CSS animations

```html
<!-- animate CSS stylesheet library -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.3.0/animate.min.css">
```


### 4. Create the HTML markup

```html
<ul class="jc-slider">
    <li class="jc-animation">
        [...]
    </li>
    <li class="jc-animation">
        [...]
    </li>
</ul>
```

### 5. Initialize the plugin

Default initialization

```javascript
<script type="text/javascript">
    $(document).ready(function(){
        $('.jc-slider').jcSlider();
    });
</script>
```

Available options

```javascript
<script type="text/javascript">
    $(document).ready(function(){
        $('.jc-slider').jcSlider({
            animationIn     : "bounceInRight",
            animationOut    : "bounceOutLeft", 
            stopOnHover     : false, // true by default
            loop            : false // true by default
        });
    });
</script>
```

### Follow the repository
★ Star and watch [this repo](https://github.com/JoanClaret/jcSlider) in order to stay updated with news about this plugin

### Available animations

* `bounce`
* `flash`
* `pulse`
* `rubberBand`
* `shake`
* `swing`
* `tada`
* `wobble`
* `jello`
* `bounceIn`
* `bounceInDown`
* `bounceInLeft`
* `bounceInRight`
* `bounceInUp`
* `bounceOut`
* `bounceOutDown`
* `bounceOutLeft`
* `bounceOutRight`
* `bounceOutUp`
* `fadeIn`
* `fadeInDown`
* `fadeInDownBig`
* `fadeInLeft`
* `fadeInLeftBig`
* `fadeInRight`
* `fadeInRightBig`
* `fadeInUp`
* `fadeInUpBig`
* `fadeOut`
* `fadeOutDown`
* `fadeOutDownBig`
* `fadeOutLeft`
* `fadeOutLeftBig`
* `fadeOutRight`
* `fadeOutRightBig`
* `fadeOutUp`
* `fadeOutUpBig`
* `flipInX`
* `flipInY`
* `flipOutX`
* `flipOutY`
* `lightSpeedIn`
* `lightSpeedOut`
* `rotateIn`
* `rotateInDownLeft`
* `rotateInDownRight`
* `rotateInUpLeft`
* `rotateInUpRight`
* `rotateOut`
* `rotateOutDownLeft`
* `rotateOutDownRight`
* `rotateOutUpLeft`
* `rotateOutUpRight`
* `hinge`
* `rollIn`
* `rollOut`
* `zoomIn`
* `zoomInDown`
* `zoomInLeft`
* `zoomInRight`
* `zoomInUp`
* `zoomOut`
* `zoomOutDown`
* `zoomOutLeft`
* `zoomOutRight`
* `zoomOutUp`
* `slideInDown`
* `slideInLeft`
* `slideInRight`
* `slideInUp`
* `slideOutDown`
* `slideOutLeft`
* `slideOutRight`
* `slideOutUp`


License
-------

    The MIT License (MIT)

    Copyright (c) 2015 Joan Claret

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in
    all copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
    THE SOFTWARE.
    
Other useful  plugins
----------------------
* [Maximum Characters limit warning](https://github.com/JoanClaret/max-char-limit-warning): Get a warning when the max char limit has been exceeded with a jQuery plugin
* [html5 canvas animation](http://joanclaret.github.io/html5-canvas-animation): 3D lines animation with three.js 
* [slide and swipe menu](http://joanclaret.github.io/slide-and-swipe-menu): A sliding swipe menu that works with touchSwipe library. 
* [jquery dynamic max height](http://joanclaret.github.io/jquery-dynamic-max-height) : Dynamic max height plugin for jQuery with CSS animation
