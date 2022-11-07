//Variables
let themeVar = 0;
var themeSwitch_btn = document.getElementById("theme-switch");

//Event Listeners


//Functions
function themeSwap(){
    if(themeVar==0){
    document.getElementById("html").style.backgroundColor='black';
    themeVar++}
    else if(themeVar==1){
        document.getElementById("html").style.backgroundColor='white'
        themeVar=0}
}