(function () {
var example = ['Software Engineer', 'ML enthusiast', 'Pet Lover'];
textSequence(0);
function textSequence(i) {

    if (example.length > i) {
        setTimeout(function() {
            
            document.getElementById("sequence").innerHTML = example[i];
            textSequence(++i);
        }, 1000); // 1 second (in milliseconds)

    } else if (example.length == i) { // Loop
        textSequence(0);
    }

}})();