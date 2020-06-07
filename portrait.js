$(document).ready(function(){
    $(".start").click(function(){
        $(".accueil").hide();
        $(".pagevierge, .photo").show();
    })
    $(".quitt").click(function(){
        $(".accueil").show();
        $(".pagevierge, .page1, .page2, .page3, .page4 ,.page5, .page6, .page7, .photo").hide();
    })
    $(".flt").click(function(){
        $(".page1").show();
        $(".pagevierge, .page2, .page3, .page4 ,.page5, .page6, .page7").hide();
    })
    $(".cpt").click(function(){
        $(".page2").show();
        $(".pagevierge, .page1, .page3, .page4 ,.page5, .page6, .page7").hide();
    })
    $(".cry").click(function(){
        $(".page3").show();
        $(".pagevierge, .page1, .page2, .page4 ,.page5, .page6, .page7").hide();
    })
    $(".lfy").click(function(){
        $(".page4").show();
        $(".pagevierge, .page1, .page2, .page3 ,.page5, .page6, .page7").hide();
    })
    $(".drh").click(function(){
        $(".page5").show();
        $(".pagevierge, .page1, .page2, .page3 ,.page4, .page6, .page7").hide();
    })
    $(".apw").click(function(){
        $(".page6").show();
        $(".pagevierge, .page1, .page2, .page3 ,.page4, .page5, .page7").hide();
    })
    $(".jkr").click(function(){
        $(".page7").show();
        $(".pagevierge, .page1, .page2, .page3 ,.page4, .page5, .page6").hide();
    })
    $(".droite").click(function(){
        $(".stats1").hide();
        $(".infos1").show();

    })
    $(".gauche").click(function(){
        $(".stats1").show();
        $(".infos1").hide();

    })
    $(".flt, .cpt, .cry, .lfy, .drh, .apw, .jkr").click(function(){
        $(".infos1").hide();
        $(".stats1").show();
    })
})
