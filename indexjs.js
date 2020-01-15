function main_next() {
        
    a=prompt("환영합니다. 아이디확인해주세요!")

    if(isNaN(a)==true) {
        alert(a+"님 환영합니다.");
        location.href="char.html";

    }
        
}

function char_next() {
    a = prompt("한국전쟁 연도는?")

   /*  if(document.charForm.selChar.kim) {
        location.href="bgkim.html"
    }
    if(document.charForm.selChar.kang) {
        location.href="bgkang.html"
    }   
    if(document.charForm.selChar.sim) {
        location.href="bgsim.html"
    } */
    location.href="bgsim.html"
   
}

function sim01_next() {
    
}