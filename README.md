A responsive slider jQuery plugin with CSS animations
========================================
Animations from [animate.css](https://daneden.github.io/animate.css/)


Online demo
-----------

[Visit plugin website](http://joanclaret.github.io/jcSlider)


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
bower install --save jcslider
```

Using npm

```bash
npm install jcslider
```

or [download the plugin](https://github.com/JoanClaret/jcSlider/archive/master.zip) from GitHub


### 2. Load the required files

```html
<!-- jQuery library (served from Google) -->
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js"></script>

<!-- Slider Javascript file -->
<script src="jquery.jcslider.js"></script>

<!-- animate CSS stylesheet library -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.3.0/animate.min.css">
```


### 3. Create the HTML markup

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

### 4. Initialize the plugin

Default initialization

```javascript
$(document).ready(function(){
    $('.jc-slider').jcSlider();
});
```

Available options

```javascript
$(document).ready(function(){
    $('.jc-slider').jcSlider({
        animationIn:    "bounceInRight",
        animationOut:   "bounceOutLeft", 
        stopOnHover:    false // true by default
    });
});
```

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
