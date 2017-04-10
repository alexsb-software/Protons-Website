/**
 * Created by Tarek AlQaddy on 4/9/2017.
 */
var h;
if(window.innerHeight > 700)
    h = 350;
else
    h = 100;
var wow1 = new WOW(
    {
        boxClass:     'bubble-pop-in',
        animateClass: 'active',
        offset:       h
    }
);
var wow2 = new WOW(
    {
        boxClass:     'char-pop-in-left',
        animateClass: 'active',
        offset:       h
    }
);
var wow3 = new WOW(
    {
        boxClass:     'char-pop-in-right',
        animateClass: 'active',
        offset:       h
    }
);
var wow4 = new WOW(
    {
        boxClass:     'text-fade-in',
        animateClass: 'active',
        offset:       h
    }
);
var wow5 = new WOW(
    {
        boxClass:     'col-bubbles-cont',
        animateClass: 'active',
        offset:       50
    }
);
var wow6 = new WOW(
    {
        boxClass:     'color-bubble',
        animateClass: 'active',
        offset:       150
    }
);
var wow7 = new WOW(
    {
        boxClass:     'col-center-cont',
        animateClass: 'active',
        offset:       200
    }
);


wow1.init();
wow2.init();
wow3.init();
wow4.init();
wow5.init();
wow6.init();
wow7.init();
