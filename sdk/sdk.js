// Get app public config value from Ecwid
let shakingAddToCartConfig = Ecwid.getAppPublicConfig('add-to-cart-shake-animator-dev');
shakingAddToCartConfig = JSON.parse(shakingAddToCartConfig);

if (!shakingAddToCartConfig) {
    shakingAddToCartConfig = {
        enabled: 'false',
        animation: 'vibrate', // animation list: vibrate, shake-horizontal, shake-vertical, shake-lr
        delayTime: null, // for type Automatic only  - between each animation
        type: 'true' // or hover
    };
}

const {
    isEnabled,
    animation,
    delayTime,
    triggerType,
} = shakingAddToCartConfig;

// If the app is enabled in storefront
window.onload = function() {
    if(isEnabled === 'true') {
        // Get all add to cart buttons on screen and add animated class.
        const findButtom = setInterval(function() {
            const addToCartBtns = $('.details-product-purchase__add-to-bag button');
            if ( addToCartBtns.length > 0 ) {
                let animateClass = `satc-animate-${animation}`;
                if (triggerType === 'auto') {
                    animateClass = animateClass.concat('--auto');
                }
                addToCartBtns.addClass(`satc-animated-btn ${animateClass}`);
                // Change animation delay time (automatic type only)
                if (triggerType === 'hover') {
                    addToCartBtns.css('animation-delay', 0);
                } else {
                    addToCartBtns.css('animation-delay', `${delayTime}s`);
                }
               clearInterval(findButtom);
           }
        }, 200);
    }
};
