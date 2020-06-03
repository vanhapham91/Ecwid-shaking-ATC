// Get app public config value from Ecwid
// let shakingAddToCartConfig = Ecwid.getAppPublicConfig('shaking-add-to-cart');
// shakingAddToCartConfig = JSON.parse(shakingAddToCartConfig);

// FAKE DATA
let shakingAddToCartConfig = {
    enabled: true,
    animation: 'shake-lr', // animation list: vibrate, shake-horizontal, shake-vertical, shake-lr
    durationTime: null, // duration of the animation
    delayTime: null, // for type Automatic only  - between each animation
    type: 'hover' // or hover
};

const {
    enabled,
    animation,
    durationTime,
    delayTime,
    type,
} = shakingAddToCartConfig

// If the app is enabled in storefront
if(enabled) {
    // Get all add to cart buttons on screen and add animated class.
    const addToCartBtns = $('.grid-product__buy-now button');
    let animateClass = `oe-animate-${animation}`;
    if (type === 'automatic') {
        animateClass = animateClass.concat('--auto');
    }
    addToCartBtns.addClass(`oe-animated-btn ${animateClass}`);

    // Change animation duration time
    if (durationTime) {
        addToCartBtns.css('animation-duration', `${durationTime}s`);
    }

    // Change animation delay time (automatic type only)
    if (delayTime) {
        addToCartBtns.css('animation-delay', `${delayTime}s`);
    }
}

