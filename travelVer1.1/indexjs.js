function main_next() {
    location.href="id.html"
}

function chageLangSel() {
    var langSel = document.getElementById("id-lang");

    var selectValue = langSel.options[langSel.selectedIndex].value;

    var selectText = langSel.options[langSel.selectedIndex].text;
    
    if(document.getElementById('id-lang').value=="en") {
        location.href="indexEn.html";
}


/* function changeLang() {
    if(document.getElementById('id-lang').value=="en") {
        location.href="indexEn.html";
    }
} */