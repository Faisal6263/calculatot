$(document).ready(function() {
    var phrases = ["MS D365 Consultant", "A coder", "A Designer", "An Editor", "A Creative Thinker"];
    var index = 0;
    var charIndex = 0;
    var speed = 60; // Speed of typing in milliseconds
    var delay = 2000; // Delay between phrases in milliseconds

    function type() {
        if (charIndex < phrases[index].length) {
            $("#name").append(phrases[index].charAt(charIndex));
            charIndex++;
            setTimeout(type, speed);
        } else {
            setTimeout(function() {
                $("#name").text("");
                charIndex = 0;
                index = (index + 1) % phrases.length;
                type();
            }, delay);
        }
    }
    type();
});