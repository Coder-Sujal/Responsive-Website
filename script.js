gsap.from("#heading",{
    onStart: function(){
        $("#heading").textillate({ in: { effect: "fadeInUp" } });
    }
})