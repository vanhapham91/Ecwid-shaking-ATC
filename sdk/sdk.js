// Get app public config value from Ecwid
// let shakingAddToCartConfig = Ecwid.getAppPublicConfig('shaking-add-to-cart');
// shakingAddToCartConfig = JSON.parse(shakingAddToCartConfig);

// FAKE DATA
let shakingAddToCartConfig = {
    enabled: true,
    animation: 'vibrate', // animation list: vibrate, wobble, tada
    durationTime: 1, // duration of the animation
    delayTime: 0, // for type Automatic only  - between each animation
    type: 'automatic' // or hover
};
shakingAddToCartConfig.enabled = true;

// If the app is enabled in storefront
if(shakingAddToCartConfig.enabled) {
    // Get all add to cart buttons on screen and add animated class.
    const addToCartBtns = $('.grid-product__buy-now button');
    let animateClass = `oe-animate-${shakingAddToCartConfig.animation}`;
    if (shakingAddToCartConfig.type === 'automatic') {
        animateClass = animateClass.concat('--auto');
    }
    addToCartBtns.addClass(animateClass);
}

