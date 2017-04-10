/**
 * Created by Tarek AlQaddy on 4/10/2017.
 */
$(document).ready(function () {
    $('#button-collapse').sideNav();
    $('#slick1').slick({
        dots:true,
        autoplay:true
    });
    $('#slick2').slick({
        dots:true,
        autoplay:true
    });
    $('#slick3').slick({
        dots:true,
        autoplay:true
    });
    var prog = $("#prog-title");
    var robo = $("#robotics-title");
    var auto = $("#auto-title");
    var options = [
        {selector: '#prog-title', offset: 300, callback: function () {
            prog.addClass("active");
        }},
        {selector: '#robotics-title', offset: 300, callback: function() {
            robo.addClass("active");
        }},
        {selector: '#auto-title', offset:300, callback: function () {
            auto.addClass("active")
        }}
    ];

    Materialize.scrollFire(options);
});