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

# Result

![main](https://user-images.githubusercontent.com/36805277/36641061-608a4518-1a6d-11e8-9501-c27b40d28a91.png)

Thank you for watching!