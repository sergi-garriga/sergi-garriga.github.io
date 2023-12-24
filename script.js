function toggleHiddenText(id) {
 var hiddenText = document.getElementById(id);
 if (hiddenText.style.display === "none") {
    hiddenText.style.display = "inline";
 } else {
    hiddenText.style.display = "none";
 }
}


function closeSpan(ids) {
    ids.forEach(function(id) {
        let spans = document.querySelectorAll(`.c_exp span[id^="${id}"]`);
        spans.forEach(function(span) {
            span.style.display = 'none';
        });
    });
}