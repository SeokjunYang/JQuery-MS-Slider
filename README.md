# What is JQuery-MS-Slider

Unlike the previous method, the list of images flows to the right. (Infinite repetition)

# How to Use

The code below creates the space to which the slider will apply.

```html
    <div class="ms-slider">
        <ul class="ms-slider-content"></ul>
    </div>
```

Add the following code afterwards:

```javascript
    var slider = new ms_slider('.ms-slider-content');
    slider.init();
    slider.imageClone();
    slider.loopAnimate(slider);
```

Thank you for watching!