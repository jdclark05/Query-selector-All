var pTags = document.querySelectorAll("p");

function getColor(element) {
    console.log(element.value);
    console.log(pTags);
    for( var i=0; i<pTags.length; i++) {
        pTags.style.color = element.value;  
        }
    }
